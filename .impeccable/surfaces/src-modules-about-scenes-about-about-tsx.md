---
version: 1
slug: "src-modules-about-scenes-about-about-tsx"
primary_target: "src/Modules/About/Scenes/About/About.tsx"
related_targets: []
---

# Over mij

Scope: `/over-mij`. Mode: Persuade (de bezoeker moet zien wie er komt en dan bellen of mailen). Erft de wereld uit DESIGN.md; geen nieuwe tokens.

Bezoeker: kent hem al half (via via, bus, Instagram), meestal op de telefoon, deels 50+. Wil weten wie er komt.

Inhoud (gebruiker, 13-10-2026): alleen "over mij": portret, naam, zijn verhaal (lorem), bellen en mailen. "Hoe ik werk" (de werkbon), "Wat ik doe" en de contactband zijn op verzoek van de gebruiker weggehaald (13-10-2026); werkwijze en diensten staan op Home. Naam "Jeroen" mag erop (nog te bevestigen door de PO, vraag 6). "Sinds 1994" niet: eerst navragen.

## Direction contract

THESIS: Eén scherm over de persoon: wie hij is, in zijn eigen woorden, met zijn nummer en mailadres ernaast. Geweigerd: een over-ons-pagina met teamfoto, kernwaarden en cijfers, en een pagina die Home herhaalt.

OWN-WORLD: DESIGN.md ongewijzigd. Gebroken wit, olijf koppen in Source Serif 4, koperen oker alleen voor Bellen/Mailen met witte tekst, foto met 4px radius. Geen contactband: de knoppen staan al in de intro en de pagina eindigt in de footer.

STORY: De bezoeker ziet een portret en "Ik ben Jeroen", leest wie hij is en belt of mailt.

FIRST VIEWPORT: Appbar. Twee kolommen (4/7): links een staand portret 4:5, rechts h1 "Over mij", een olijf lead met zijn naam, twee alinea's (max 56ch) en de knoppen Bellen en Mailen naast elkaar. Standaard ruimte boven (`clamp(40px, 6vw, 88px)`) en onder (`sectionSpacing`). Mobiel: tekst en knoppen eerst, portret eronder (max 420px).

FORM: Surface-ronde, kaart "Wie doet wat? Ik.", positie 2 van de eigen lijst; seed eecb6af4. Op 13-10-2026 door de gebruiker teruggebracht tot alleen de intro; de werkbon is vervallen.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

- Teksten (PO), portretfoto (PO; nu een tijdelijke stockfoto zonder gezicht), naam bevestigen (vraag 6), "sinds 1994" navragen.
