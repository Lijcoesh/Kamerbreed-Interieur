# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## Nu

- [ ] De ★-vragen uit "Nog open" bij de PO navragen: adres, btw-*, contactkanalen, Instagram

## MVP (lorem ipsum)

- [x] Routes: Home, Projecten, Over mij, Contact (de laatste drie nog als lege pagina)
- [x] Layout: appbar met logo en bedrijfsnaam, footer met bedrijfsgegevens en Instagram-link, skip-link naar de hoofdinhoud
- [x] Home: slogan, diensten, werkwijze, over mij, contact
- [x] ~~Projecten: per soort een sectie met snelmenu (`/projecten#pvc`), placeholders uit `src/Config/projects.ts`. Een project met meer diensten staat onder elke soort, met "Ook: …" eronder.~~ Weggehaald op 28-10-2026: de PO heeft geen projectfoto's.
- [x] Over mij: alleen de intro (portret, verhaal, bellen en mailen). "Hoe ik werk", "Wat ik doe" en de contactband zijn eraf gehaald (13-10-2026).
- [x] Contact: bellen en mailen, contactformulier (verstuurt nog niet), werkgebied, bedrijfsgegevens. De WhatsApp-knop staat klaar: aanzetten met `whatsappNumber` in `src/Config/company.ts` zodra de PO bevestigt.
- [ ] Backend in `/server` voor het contactformulier: .NET volgens de conventies van `F:/Development/UpNext/UpNext.API`, e-mail via Brevo, eigen VPS. Command met dezelfde velden en grenzen als `src/Helpers/validateContactMessage.ts` (of ruimer), een gevulde honeypot `website` stil negeren, rate limiting (429), CORS voor het domein. Daarna `contactEndpoint` in `src/Config/api.ts` invullen.
- [x] Privacyverklaring: opbouw met koppen volgens de AVG en lorem, inhoudsopgave, link in de footer en vanuit het formulier
- [x] Echte tekst voor de privacyverklaring (concept, 29-10-2026)
- [ ] Privacyverklaring laten controleren door de PO of een jurist: bewaartermijn, verwerkersovereenkomsten, adres (launch-checklist)
- [ ] Titel per pagina (document title)

## Zodra de PO iets aanlevert
- [x] Opmaakwensen van de PO (28-10-2026): appbar groter (100px) en iets donkerder dan de achtergrond, logo groter in appbar en footer met "Jeroen van der Eijk" onder de bedrijfsnaam
- [ ] Typfouten en je/u in zijn teksten, na zijn antwoord (`Gesprek-PO.md`, vraag 10)
- [ ] Bedrijfsgegevens in de footer (`src/Config/company.ts`: btw, adres volgens de beslissing van de PO, Instagram-URL)

## Livegang

- [ ] Domein naar de VPS laten wijzen (DNS bij Mijndomein) en in `deploy/kamerbreed.caddy` het IP vervangen door het domein, zodat Caddy HTTPS regelt; de WordPress-pagina vervalt dan. De site draait al op de VPS (`deploy/README.md`).
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Launch-checklist volledig nalopen
