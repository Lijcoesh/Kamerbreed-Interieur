# TODO

Op volgorde. Vragen voor de PO staan in `Gesprek-PO.md` ("Nog open"), juridische punten in `.claude/conventions/launch-checklist.md`.

## Nu

- [ ] De ★-vragen uit "Nog open" bij de PO navragen: adres, KvK/btw, contactkanalen, Instagram
- [ ] `npm ci` werkt niet: `package-lock.json` verwijst naar een CodeArtifact-registry (`rfh-…codeartifact…`) met een verlopen token. Token vernieuwen, of de lockfile opnieuw laten resolven tegen registry.npmjs.org.

## MVP (lorem ipsum)

- [x] Routes: Home, Projecten, Over mij, Contact (de laatste drie nog als lege pagina)
- [x] Layout: appbar met logo en bedrijfsnaam, footer met bedrijfsgegevens en Instagram-link, skip-link naar de hoofdinhoud
- [x] Home: slogan, diensten, werkwijze, projecten, over mij, contact
- [x] Projecten: per soort een sectie met snelmenu (`/projecten#pvc`), placeholders uit `src/Config/projects.ts`. Een project met meer diensten staat onder elke soort, met "Ook: …" eronder.
- [ ] Diensten op Home laten linken naar hun sectie op Projecten (`/projecten#<dienst-id>`)
- [x] Over mij: verhaal, portretplek, "Hoe ik werk" als rolverdeling (achter elke taak "ik"), kort "Wat ik doe", contactband. De PO loopt de vijf taken na.
- [x] Contact: bellen en mailen, contactformulier (verstuurt nog niet), werkgebied, bedrijfsgegevens. De WhatsApp-knop staat klaar: aanzetten met `whatsappNumber` in `src/Config/company.ts` zodra de PO bevestigt.
- [ ] Backend in `/server` voor het contactformulier: .NET volgens de conventies van `F:/Development/UpNext/UpNext.API`, e-mail via Brevo, eigen VPS. Command met dezelfde velden en grenzen als `src/Helpers/validateContactMessage.ts` (of ruimer), een gevulde honeypot `website` stil negeren, rate limiting (429), CORS voor het domein. Daarna `contactEndpoint` in `src/Config/api.ts` invullen.
- [ ] Privacyverklaring: `/privacy` bestaat als lege pagina, het formulier linkt ernaar
- [ ] Titel per pagina (document title)

## Zodra de PO iets aanlevert

- [ ] Origineel logo verwerken (liefst svg), tijdelijke JPEG weghalen
- [ ] Projectfoto's en een foto van de eigenaar verwerken, verkleinen naar webformaat, herkomst vastleggen. Ze vervangen de tijdelijke stockfoto's in `src/Config/projects.ts` en `src/Config/photos.ts`; daarna `src/Resources/Photos/Temp/` weghalen.
- [ ] Teksten van de PO in plaats van lorem ipsum en de werktitels
- [ ] Bedrijfsgegevens in de footer (`src/Config/company.ts`: KvK bevestigen, btw, adres volgens de beslissing van de PO, Instagram-URL)

## Livegang

- [ ] Hosting bij Mijndomein inrichten, de WordPress-pagina vervangen
- [ ] `noindex` uit `index.html` halen, meta-description en titel per pagina
- [ ] Launch-checklist volledig nalopen
