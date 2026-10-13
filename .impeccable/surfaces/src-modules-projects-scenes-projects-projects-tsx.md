---
version: 1
slug: "src-modules-projects-scenes-projects-projects-tsx"
primary_target: "src/Modules/Projects/Scenes/Projects/Projects.tsx"
related_targets: []
---

# Projecten

Scope: `/projecten`. Mode: Experience (het werk is het bewijs). Erft de wereld uit DESIGN.md; geen nieuwe tokens.

Bezoeker: kent hem half, meestal op de telefoon, deels 50+. Wil zien wat hij gemaakt heeft, voor de soort vloer of raambekleding die hij zelf zoekt.

Inhoud (gebruiker, 13-10-2026): voorbeelden van werk van de PO, gesorteerd per soort: pvc, laminaat, vloerbedekking, tapijt, binnenzonwering (vloeronderhoud is van de site). Secties per soort met een snelmenu bovenaan; elke soort bereikbaar via `/projecten#<dienst-id>`, zodat Home ernaar kan linken. Tot de PO foto's stuurt: 2 of 3 placeholders per soort met neutrale werktitel en lorem, geen verzonnen plaatsen of klanten. Alle projecten in één databestand; een project kan meer diensten hebben en staat dan onder elke soort.

## Direction contract

THESIS: Een rustige opleverlijst per soort, zoals een vakman zijn opgeleverde werk in een map bijhoudt: foto en korte beschrijving, rij na rij. Geweigerd: een anonieme fotogalerij met filterknoppen en lightbox.

OWN-WORLD: DESIGN.md ongewijzigd. Gebroken wit, olijf koppen in Source Serif 4, lijsten met 1px haarlijnen, fotoplekken met `PhotoPlaceholder`, snelmenu als onderstreepte tekstlinks (48px hoog) tussen twee haarlijnen. Geen kaarten, geen schaduw; oker alleen in de contactband.

STORY: De bezoeker ziet "Projecten", kiest in het snelmenu zijn soort of scrolt, ziet per project een foto met titel en korte tekst, en belt of mailt via de contactband.

FIRST VIEWPORT: Appbar. h1 "Projecten" met één zin, daaronder het snelmenu met de vijf soorten en hun aantal. Dan "Pvc-vloeren" (h2) met het aantal projecten rechts, en de eerste rijen: foto 4:3 links op ongeveer een derde, rechts titel (h3) en lorem. Mobiel: foto boven de tekst per rij, het aantal projecten onder de soortkop (bij elke soort, zodat ze gelijk beginnen); het snelmenu loopt over meerdere regels.

FORM: Surface-ronde, tweede hand, kaart "De opleverlijst", positie 3 van de eigen lijst; seed e5880e7e, reroll 1. Code-led, wireframe.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

- Projectfoto's, titels en teksten van de PO (vraag 5), welke diensten bij elk project horen.
- Risico uit de ronde: de foto's zijn klein (ongeveer een derde). Met echte foto's opnieuw bekijken of ze groter moeten.
