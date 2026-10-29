# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## MVP (lorem ipsum)

- [ ] Privacyverklaring (herschreven 29-10-2026) laten controleren door de PO of een jurist; verwerkersovereenkomsten met Brevo, TransIP en de PO regelen (launch-checklist)
- [ ] De PO vragen of "Kamerbreed Interieur" als handelsnaam bij de KvK staat (`Gesprek-PO.md`, vraag 17)

## Livegang

- [ ] E-mail van `kamerbreedinterieur.nl` van Mijndomein naar TransIP verhuizen (mailbox en bestaande mail overzetten, MX-records aanpassen). De privacyverklaring noemt al TransIP als host van de mail.
- [ ] Domein naar de VPS laten wijzen (DNS bij Mijndomein) en in `deploy/kamerbreed.caddy` het IP vervangen door het domein, zodat Caddy HTTPS regelt; de WordPress-pagina vervalt dan. De site draait al op de VPS (`deploy/README.md`).
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Brevo: `kamerbreedinterieur.nl` verifiëren (DNS bij Mijndomein), afzender op dat domein in `api.env`, en `Mail__ContactMessageRecipient` uit `api.env` halen zodat de mail naar `info@kamerbreedinterieur.nl` gaat
- [ ] Brevo: retentie instellen (Settings → Transactional emails → Retention rules): logs een maand, previews "never store", en de bestaande previews verwijderen. De privacyverklaring zegt dit al. Geldt voor het hele gedeelde account, dus ook WaterZacht.
- [ ] GitHub Pages-demo uitzetten (repo → Settings → Pages, en `deploy-pages.yml` weghalen): GitHub (VS) host hem en de privacyverklaring noemt alleen TransIP
- [ ] Launch-checklist volledig nalopen
