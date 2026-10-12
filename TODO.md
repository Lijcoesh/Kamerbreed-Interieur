# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## Nu

- [ ] De ★-vragen uit "Nog open" bij de PO navragen: adres, KvK/btw, contactkanalen, Instagram
- [ ] `PRODUCT.md`: doelgroep (particulieren in het Westland), positie (één vakman die alles zelf doet), principes (netjes en persoonlijk)
- [ ] `DESIGN.md`: visueel systeem op basis van de kleuren van de oude site en het logo, met de okerknop aangepast zodat hij aan AA voldoet. Fonts kiezen en zelf hosten, geen Google Fonts-CDN.
- [ ] `src/colors.ts` en `src/Theme/` aanpassen aan DESIGN.md

## MVP (lorem ipsum)

- [ ] Routes: Home, Projecten, Over mij, Contact
- [ ] Layout: appbar met logo en bedrijfsnaam, footer met bedrijfsgegevens en Instagram-link, skip-link naar de hoofdinhoud
- [ ] Home: slogan, diensten (vloeren: pvc, tapijt, laminaat, vloeronderhoud; binnenzonwering), werkwijze (één aanspreekpunt), verwijzing naar contact
- [ ] Projecten: overzicht met placeholderfoto's, data uit één bestand zodat er makkelijk een project bij kan. Elk project krijgt de dienst(en) als veld en toont die als label.
- [ ] Filter op dienst bij Projecten, alleen als er genoeg projecten zijn (zie vraag 5 in `Gesprek-PO.md`). De filter staat in de URL (`/projecten?dienst=pvc`), zodat de diensten op Home ernaar kunnen linken.
- [ ] Over mij
- [ ] Contact: knoppen voor bellen, mailen en WhatsApp (zodra bevestigd)
- [ ] Tijdelijk logo: de JPEG van de huidige site, tot het origineel binnen is

## Zodra de PO iets aanlevert

- [ ] Origineel logo verwerken (liefst svg)
- [ ] Projectfoto's verwerken, verkleinen naar webformaat, herkomst vastleggen
- [ ] Teksten van de PO in plaats van lorem ipsum
- [ ] Bedrijfsgegevens in de footer (KvK, btw, adres volgens de beslissing van de PO)

## Livegang

- [ ] Hosting bij Mijndomein inrichten, de WordPress-pagina vervangen
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Launch-checklist volledig nalopen
