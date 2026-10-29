# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## Nu

- [ ] De ★-vragen uit "Nog open" bij de PO navragen: contactkanalen, Instagram

## MVP (lorem ipsum)

- [x] Routes: Home, Projecten, Over mij, Contact (de laatste drie nog als lege pagina)
- [x] Layout: appbar met logo en bedrijfsnaam, footer met bedrijfsgegevens en Instagram-link, skip-link naar de hoofdinhoud
- [x] Home: slogan, diensten, werkwijze, over mij, contact
- [x] ~~Projecten: per soort een sectie met snelmenu (`/projecten#pvc`), placeholders uit `src/Config/projects.ts`. Een project met meer diensten staat onder elke soort, met "Ook: …" eronder.~~ Weggehaald op 28-10-2026: de PO heeft geen projectfoto's.
- [x] Over mij: alleen de intro (portret, verhaal, bellen en mailen). "Hoe ik werk", "Wat ik doe" en de contactband zijn eraf gehaald (13-10-2026).
- [x] Contact: bellen en mailen, contactformulier (verstuurt nog niet), werkgebied, bedrijfsgegevens. De WhatsApp-knop staat klaar: aanzetten met `whatsappNumber` in `src/Config/company.ts` zodra de PO bevestigt.
- [x] Backend in `server/` voor het contactformulier (29-10-2026): opzet van WaterZacht, `POST /api/contact-messages`, mail via Brevo, honeypot, rate limiting. Geen CORS nodig: Caddy serveert site en API op hetzelfde adres.
- [x] API op de VPS zetten: `deploy/README.md`, "Eenmalig instellen" (stap 1 t/m 4, 29-10-2026)
- [x] Formulier testen op de VPS: mail verstuurd (29-10-2026), komt hij binnen en werkt antwoorden (reply-to)?
- [x] Privacyverklaring: opbouw met koppen volgens de AVG en lorem, inhoudsopgave, link in de footer en vanuit het formulier
- [x] Echte tekst voor de privacyverklaring (concept, 29-10-2026)
- [ ] Privacyverklaring laten controleren door de PO of een jurist: bewaartermijn, verwerkersovereenkomsten (launch-checklist)
- [ ] Titel per pagina (document title)

## Zodra de PO iets aanlevert
- [x] Opmaakwensen van de PO (28-10-2026): appbar groter (100px) en iets donkerder dan de achtergrond, logo groter in appbar en footer met "Jeroen van der Eijk" onder de bedrijfsnaam
- [x] Typfouten en u/uw in zijn teksten (29-10-2026; "u" was zijn keuze)
- [x] Bedrijfsgegevens in de footer (`src/Config/company.ts`: btw, Instagram-URL, adres; adres bevestigd door de PO, 29-10-2026)

## Livegang

- [ ] Domein naar de VPS laten wijzen (DNS bij Mijndomein) en in `deploy/kamerbreed.caddy` het IP vervangen door het domein, zodat Caddy HTTPS regelt; de WordPress-pagina vervalt dan. De site draait al op de VPS (`deploy/README.md`).
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Brevo: `kamerbreedinterieur.nl` verifiëren (DNS bij Mijndomein), afzender op dat domein in `api.env`, en `Mail__ContactMessageRecipient` uit `api.env` halen zodat de mail naar `info@kamerbreedinterieur.nl` gaat
- [ ] Launch-checklist volledig nalopen
