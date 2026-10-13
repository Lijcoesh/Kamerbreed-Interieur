# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## Nu

- [ ] De ★-vragen uit "Nog open" bij de PO navragen: adres, KvK/btw, contactkanalen, Instagram
- [ ] `npm ci` werkt niet: `package-lock.json` verwijst naar een CodeArtifact-registry (`rfh-…codeartifact…`) met een verlopen token. Token vernieuwen, of de lockfile opnieuw laten resolven tegen registry.npmjs.org.

## MVP (lorem ipsum)

- [x] Routes: Home, Projecten, Over mij, Contact (de laatste drie nog als lege pagina)
- [x] Layout: appbar met logo en bedrijfsnaam, footer met bedrijfsgegevens en Instagram-link, skip-link naar de hoofdinhoud
- [x] Home: slogan, diensten, werkwijze, projecten, over mij, contact
- [ ] Projecten: overzicht met placeholderfoto's, data uit één bestand zodat er makkelijk een project bij kan. Elk project krijgt de dienst(en) als veld (`ServiceId` uit `src/Definitions/Service.ts`) en toont die als label.
- [ ] Filter op dienst bij Projecten, alleen als er genoeg projecten zijn (zie vraag 5 in `Gesprek-PO.md`). De filter staat in de URL (`/projecten?dienst=pvc`), zodat de diensten op Home ernaar kunnen linken.
- [ ] Over mij
- [ ] Contact: knoppen voor bellen en mailen (`ContactButtons`), WhatsApp zodra bevestigd
- [ ] Titel per pagina (document title)

## Zodra de PO iets aanlevert

- [ ] Origineel logo verwerken (liefst svg), tijdelijke JPEG weghalen
- [ ] Projectfoto's verwerken, verkleinen naar webformaat, herkomst vastleggen; `PhotoPlaceholder` vervangen
- [ ] Teksten van de PO in plaats van lorem ipsum en de werktitels
- [ ] Bedrijfsgegevens in de footer (`src/Config/company.ts`: KvK bevestigen, btw, adres volgens de beslissing van de PO, Instagram-URL)

## Livegang

- [ ] Hosting bij Mijndomein inrichten, de WordPress-pagina vervangen
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Launch-checklist volledig nalopen
