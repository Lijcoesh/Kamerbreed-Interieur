# Deploy naar de VPS

De site en de API draaien op dezelfde VPS als waterzacht (TransIP, Ubuntu 26.04, `85.10.151.178`). Caddy serveert de site op poort 8080 (poort 80 is van waterzacht) en stuurt `/api` door naar de API op `127.0.0.1:5082` (5080 is van waterzacht, 5081 van StudioLN; het overzicht van de VPS staat in `F:/Development/StudioLN-Dashboard/.claude/vps.md`). De API draait als systemd-service. Bij elke push naar `main` bouwt GitHub Actions ([deploy-vps.yml](../.github/workflows/deploy-vps.yml)) de site (eerst `npm run lint`) en de API (eerst `dotnet test`), zet ze met rsync op de VPS en herstart de API. Handmatig starten kan via Actions → Deploy to VPS → Run workflow.

| Op de VPS | Wat |
|---|---|
| `/var/www/kamerbreed/site/` | gebouwde frontend (`dist/`), eigenaar `deploy` |
| `/var/www/kamerbreed/api/` | `dotnet publish` van `server/`, eigenaar `deploy` |
| `/etc/kamerbreed/api.env` | secrets voor de API, alleen leesbaar voor root |
| `/etc/caddy/sites/kamerbreed.caddy` | Caddy-config van deze site ([kamerbreed.caddy](kamerbreed.caddy)) |
| `/etc/systemd/system/kamerbreed-api.service` | de API-service ([kamerbreed-api.service](kamerbreed-api.service)) |

Gebruikers: `deploy` (GitHub logt hiermee in, dezelfde als bij waterzacht) en `kamerbreed` (draait de API, kan niet inloggen). Caddy, rsync, de .NET-runtime, de firewall, fail2ban en de `deploy`-gebruiker zijn er al (zie de deploy-README van waterzacht).

## Eenmalig instellen

Stond de site al op de VPS zonder API (in `/var/www/kamerbreed/` zelf)? Doe dan stap 1 tot en met 5 **voordat** je de API naar `main` pusht. Anders zet de workflow de API in een map die Caddy nog openbaar serveert, en faalt het herstarten.

1. Gebruiker en mappen. De bestaande site wordt `site/`:
   ```
   sudo useradd --system --no-create-home --shell /usr/sbin/nologin kamerbreed
   sudo mv /var/www/kamerbreed /var/www/kamerbreed-site
   sudo mkdir -p /var/www/kamerbreed/api /etc/kamerbreed
   sudo mv /var/www/kamerbreed-site /var/www/kamerbreed/site
   sudo chown -R deploy:deploy /var/www/kamerbreed
   ```
   Op een lege VPS: `sudo mkdir -p /var/www/kamerbreed/site` in plaats van de twee `mv`-regels.
2. Secrets in `/etc/kamerbreed/api.env` (`sudo nano`, daarna `sudo chmod 600`):
   ```
   Brevo__ApiKey=...
   Brevo__SenderEmail=...
   ```
   Brevo: het gedeelde account (ook WaterZacht), met een eigen API-key voor deze site (`kamerbreed-api`). Het afzenderadres moet in Brevo geverifieerd zijn (bij voorkeur het hele domein, met de DNS-records die Brevo geeft). De mail gaat naar `Mail:ContactMessageRecipient` in `server/appsettings.json`; om te testen kun je die in `api.env` overschrijven met `Mail__ContactMessageRecipient=<jouw adres>`.
3. Config: kopieer [kamerbreed.caddy](kamerbreed.caddy) naar `/etc/caddy/sites/` en [kamerbreed-api.service](kamerbreed-api.service) naar `/etc/systemd/system/`, dan:
   ```
   caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
   sudo systemctl daemon-reload
   sudo systemctl enable kamerbreed-api
   sudo systemctl reload caddy
   ```
   Kopieer de bestanden (bv. met `scp` naar je home en dan `sudo mv`); plakken in nano vanuit Windows kan de regeleinden kapotmaken.
4. `deploy` mag de service herstarten:
   ```
   echo 'deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart kamerbreed-api' | sudo tee /etc/sudoers.d/deploy-kamerbreed
   sudo chmod 440 /etc/sudoers.d/deploy-kamerbreed
   ```
5. Firewall: `sudo ufw allow 8080/tcp` (staat er al). Poort 5082 blijft dicht: de API luistert alleen op `127.0.0.1`.
6. GitHub-secrets (repo → Settings → Secrets and variables → Actions): `VPS_HOST` (het IP), `VPS_SSH_KEY` (de privé deploy-key van `deploy`, dezelfde als bij waterzacht) en `VPS_KNOWN_HOSTS` (uitvoer van `ssh-keyscan 85.10.151.178`). Staan er al.

Wijzig je later `kamerbreed.caddy` of de service, kopieer hem dan opnieuw en doe `sudo systemctl reload caddy` of `sudo systemctl daemon-reload && sudo systemctl restart kamerbreed-api`. De workflow kopieert alleen de site en de API.

## Controleren

- Laatste deploy: tabblad Actions op GitHub.
- Site: `curl -I http://85.10.151.178:8080/` geeft `200` en `X-Robots-Tag: noindex, nofollow`.
- API: `curl http://85.10.151.178:8080/api/health` geeft `Healthy`. Gebruik geen `/health`: zonder `/api` ervoor geeft Caddy `index.html` terug, met een 200, ook als de API plat ligt.
- API-status: `systemctl status kamerbreed-api`; logs: `journalctl -u kamerbreed-api -n 50`. De API logt geen formulierinhoud of e-mailadressen.

## GitHub Pages (demo)

[deploy-pages.yml](../.github/workflows/deploy-pages.yml) bouwt bij elke push naar `main` ook een versie voor GitHub Pages, op `https://lijcoesh.github.io/Kamerbreed-Interieur/`. Die build zet `BASE_PATH=/Kamerbreed-Interieur/` (zie `vite.config.ts`; de router leest dat via `import.meta.env.BASE_URL`) en kopieert `index.html` naar `404.html`, zodat directe links als `/Kamerbreed-Interieur/contact` werken. Daar draait geen API: het formulier meldt dat bezoekers moeten bellen of mailen (`src/Config/api.ts`).

Eenmalig: repo → Settings → Pages → Source: **GitHub Actions**. Pages op een privé-repo kan alleen met een betaald GitHub-account; de Pages-site zelf is altijd openbaar.
