# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## MVP (lorem ipsum)

- [ ] Privacyverklaring laten controleren door de PO of een jurist: bewaartermijn, verwerkersovereenkomsten (launch-checklist)

## Livegang

- [ ] Domein naar de VPS laten wijzen (DNS bij Mijndomein) en in `deploy/kamerbreed.caddy` het IP vervangen door het domein, zodat Caddy HTTPS regelt; de WordPress-pagina vervalt dan. De site draait al op de VPS (`deploy/README.md`).
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Brevo: `kamerbreedinterieur.nl` verifiëren (DNS bij Mijndomein), afzender op dat domein in `api.env`, en `Mail__ContactMessageRecipient` uit `api.env` halen zodat de mail naar `info@kamerbreedinterieur.nl` gaat
- [ ] Launch-checklist volledig nalopen
