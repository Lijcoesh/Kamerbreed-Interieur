# Deploy naar de VPS

De site draait op dezelfde VPS als waterzacht (TransIP, Ubuntu 26.04, `85.10.151.178`). Caddy serveert hem op poort 8080; poort 80 is van waterzacht. Bij elke push naar `main` bouwt GitHub Actions ([deploy-vps.yml](../.github/workflows/deploy-vps.yml)) de site (eerst `npm run lint`) en zet hem met rsync op de VPS. Handmatig starten kan via Actions → Deploy to VPS → Run workflow.

| Op de VPS | Wat |
|---|---|
| `/var/www/kamerbreed/` | gebouwde frontend (`dist/`), eigenaar `deploy` |
| `/etc/caddy/sites/kamerbreed.caddy` | Caddy-config van deze site ([kamerbreed.caddy](kamerbreed.caddy)) |

GitHub logt in als `deploy`, dezelfde gebruiker als bij waterzacht. Caddy, rsync, de firewall en de `deploy`-gebruiker zijn er al (zie de deploy-README van waterzacht).

## Eenmalig instellen

1. Map aan `deploy` geven:
   ```
   sudo chown -R deploy:deploy /var/www/kamerbreed
   ```
2. Caddy-config: kopieer [kamerbreed.caddy](kamerbreed.caddy) naar `/etc/caddy/sites/`, dan:
   ```
   caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
   sudo systemctl reload caddy
   ```
   Kopieer het bestand (bv. met `scp` naar je home en dan `sudo mv`); plakken in nano vanuit Windows kan de regeleinden kapotmaken.
3. Firewall: `sudo ufw allow 8080/tcp` (staat er al).
4. GitHub-secrets (repo → Settings → Secrets and variables → Actions): `VPS_HOST` (het IP), `VPS_SSH_KEY` (de privé deploy-key van `deploy`, dezelfde als bij waterzacht) en `VPS_KNOWN_HOSTS` (uitvoer van `ssh-keyscan 85.10.151.178`).

Wijzig je later `kamerbreed.caddy`, kopieer hem dan opnieuw en doe `sudo systemctl reload caddy`. De workflow kopieert alleen de site.

## Controleren

- Laatste deploy: tabblad Actions op GitHub.
- Site: `curl -I http://85.10.151.178:8080/` geeft `200` en `X-Robots-Tag: noindex, nofollow`.

## GitHub Pages (demo)

[deploy-pages.yml](../.github/workflows/deploy-pages.yml) bouwt bij elke push naar `main` ook een versie voor GitHub Pages, op `https://lijcoesh.github.io/Kamerbreed-Interieur/`. Die build zet `BASE_PATH=/Kamerbreed-Interieur/` (zie `vite.config.ts`; de router leest dat via `import.meta.env.BASE_URL`) en kopieert `index.html` naar `404.html`, zodat directe links als `/Kamerbreed-Interieur/contact` werken.

Eenmalig: repo → Settings → Pages → Source: **GitHub Actions**. Pages op een privé-repo kan alleen met een betaald GitHub-account; de Pages-site zelf is altijd openbaar.
