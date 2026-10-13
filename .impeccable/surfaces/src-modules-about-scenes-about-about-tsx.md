---
version: 1
slug: "src-modules-about-scenes-about-about-tsx"
primary_target: "src/Modules/About/Scenes/About/About.tsx"
related_targets: []
---

# Over mij

Scope: `/over-mij`. Mode: Persuade (de bezoeker moet geloven dat dit een nette vakman is die alles zelf doet, en dan bellen of mailen). Erft de wereld uit DESIGN.md; geen nieuwe tokens.

Bezoeker: kent hem al half (via via, bus, Instagram), meestal op de telefoon, deels 50+. Wil weten wie er komt en dat er niemand tussen zit.

Inhoud (gebruiker, 13-10-2026): zijn verhaal (lorem), fotoplek, "Hoe ik werk" in de ik-vorm, kort "Wat ik doe", contactband onderaan. Naam "Jeroen" mag erop (nog te bevestigen door de PO, vraag 6). "Sinds 1994" niet: eerst navragen. Geen werkgebied.

## Direction contract

THESIS: Hij is het bedrijf, en de pagina laat dat zien in plaats van het te beweren: een rolverdeling van een klus waar achter elke taak "ik" staat. Geweigerd: een over-ons-pagina met teamfoto, kernwaarden en cijfers.

OWN-WORLD: DESIGN.md, plus de werkbon als nieuw onderdeel. Gebroken wit, olijf koppen in Source Serif 4, oker alleen voor Bellen/Mailen. De rolverdeling staat op één wit paneel met haarlijn, zoals een werkbon: kolomkoppen "Wat" en "Wie", rijen gescheiden door haarlijnen, olijf oldstyle-nummers in de stijl van de werkwijze op Home, maar kleiner (1.75rem in plaats van 2.25rem) omdat ze in de rij op de basislijn van de h3 staan, een stippellijn van taak naar "ik" in olijf serif. Geen slotzin onder de lijst: de vijf keer "ik" zeggen het al.

STORY: De bezoeker ziet een portret en "Ik ben Jeroen", leest wie hij is, ziet in de lijst dat hij langskomt, adviseert, inmeet en legt, allemaal zelf, ziet kort wat hij doet en belt of mailt.

FIRST VIEWPORT: Appbar. Twee kolommen (4/7, zelfde raster als het portret in Over mij op Home; de portretkolom lijnt uit met de kopkolom eronder): links een staand portret 4:5, rechts h1 "Over mij", een olijf lead met zijn naam, een alinea en de okerknoppen Bellen en Mailen naast elkaar. Mobiel: tekst en knoppen eerst, portret eronder. Daaronder begint, na een haarlijn, "Hoe ik werk" met het werkbonpaneel; kop en bovenkant van het paneel vallen op 1440×900 nog in beeld (intro daarom krapper: boven 56px, onder 64px vanaf md).

FORM: Surface-ronde, kaart "Wie doet wat? Ik.", positie 2 van de eigen lijst; seed eecb6af4. Code-led, wireframe (geen beeldgeneratie).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

- Teksten (PO), portretfoto (PO), naam bevestigen (vraag 6), de rollen in de lijst laten nalopen door de PO, "sinds 1994" navragen.
