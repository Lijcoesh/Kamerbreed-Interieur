---
name: Kamerbreed Interieur
description: Website van een eenmansvloerenbedrijf in het Westland; de categoriestandaard van een lokale vakman, rustig en goed uitgevoerd.
colors:
  olive: "#4F4A30"
  oliveDark: "#3D3925"
  ochre: "#D49259"
  ochreDark: "#C27F45"
  logoBlue: "#0884AF"
  black: "#1D1F1E"
  ink: "#4F4E4A"
  muted: "#67665F"
  onOlive: "#F0F1EE"
  onOliveMuted: "#D6D4C6"
  background: "#F0F1EE"
  placeholder: "#E2E3DD"
  border: "#D9DAD3"
  inputBorder: "#8A887F"
  white: "#ffffff"
  error: "#B3261E"
typography:
  h1:
    fontFamily: "\"Source Serif 4\", Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.4rem, 1.7rem + 2.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  h2:
    fontFamily: "\"Source Serif 4\", Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(1.9rem, 1.5rem + 1.5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "\"Source Serif 4\", Georgia, \"Times New Roman\", serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
  subtitle1:
    fontFamily: "\"Source Sans 3\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.4
  body1:
    fontFamily: "\"Source Sans 3\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body2:
    fontFamily: "\"Source Sans 3\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "\"Source Sans 3\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0"
rounded:
  borderRadius: "6px"
spacing:
  unit: "8px"
  pageGutterSmall: "20px"
  pageGutter: "28px"
  touchTarget: "48px"
  headerHeightSmall: "64px"
  headerHeight: "76px"
  sectionSpacing: "clamp(64px, 8vw, 120px)"
  contentMaxWidth: "1200px"
components:
  button-contact:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.black}"
    rounded: "{rounded.borderRadius}"
    typography: "{typography.button}"
    padding: "10px 24px"
    height: "56px"
  button-contact-hover:
    backgroundColor: "{colors.ochreDark}"
    textColor: "{colors.black}"
  button-submit:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.black}"
    rounded: "{rounded.borderRadius}"
    typography: "{typography.button}"
    padding: "8px 24px"
    height: "56px"
  button-submit-hover:
    backgroundColor: "{colors.ochreDark}"
    textColor: "{colors.black}"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.olive}"
    rounded: "{rounded.borderRadius}"
    typography: "{typography.button}"
    height: "48px"
  icon-button:
    textColor: "{colors.olive}"
    rounded: "{rounded.borderRadius}"
    size: "48px"
  appbar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "76px"
  contact-band:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.onOlive}"
  panel:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.borderRadius}"
  werkbon:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.borderRadius}"
    padding: "24px 40px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.borderRadius}"
    typography: "{typography.body1}"
    padding: "12px 14px"
    height: "48px"
  photo-placeholder:
    backgroundColor: "{colors.placeholder}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: "16px"
---

# Design System: Kamerbreed Interieur

## Overview

**Creative North Star: "De vakman aan de keukentafel"**

Een lokale vakman die je al half kent, op z'n best gepresenteerd: logo en naam van de bus, een rustige schreefkop in olijfbruin, foto en tekst naast elkaar, en twee even grote okerknoppen om te bellen of te mailen. Het systeem is de categoriestandaard van een vloerenbedrijf (aanbod, diensten, werkwijze, projecten, over mij, contact), niet vernieuwd maar zorgvuldig uitgevoerd. De warmte komt uit de kleur van de oude "in aanbouw"-pagina en het logo, niet uit decoratie.

Het vlak is gebroken wit (`background`); secties scheiden door haarlijnen (`border`), niet door schaduw of kaarten. Wit is uitzondering: appbar, footer, losse panelen en invoervelden. Eén olijfbruine contactband sluit een inhoudspagina af; de contactpagina heeft er geen, want die pagina is zelf het contact. Typografie is royaal (body 18px, tikdoelen 48px) omdat de doelgroep deels 50+ is en meestal op de telefoon kijkt.

Bewust geweigerd (direction contract): de anonieme template met stockfoto, reviewslider en "wij"-taal, en trendy designstatements.

**Key Characteristics:**
- Gebroken wit vlak, olijfbruine koppen, warm donkergrijze tekst.
- Oker alleen als knopvlak met donkere tekst en als teken voor "actief".
- Haarlijnen in plaats van schaduw; vlak en rustig.
- Bellen en mailen altijd even zwaar.
- Fotoplekken zijn neutrale placeholders tot de echte foto's er zijn.
- Royale maten: 18px body, 48px tikdoelen.

## Colors

Een gedempt, warm aardepalet: olijf en oker van de oude site, logoblauw als functionele uitzondering. Bron: `src/colors.ts`, gemapt op MUI-rollen in `src/Theme/palette.ts`.

### Primary
- **Olijfbruin** (`olive`): alle koppen (h1 t/m h3, footerkoppen, stapnummers en de nummers en het "ik" in de werkbon), de stippellijn in de werkbon (op 45%), de lead (`subtitle1`), hovertekst en actieve navigatie, en het vlak van de contactband. MUI `primary.main`.
- **Diep olijf** (`oliveDark`): MUI `primary.dark`, de hovertoon van olijf.

### Secondary
- **Oker** (`ochre`): uitsluitend het vlak van de actieknoppen (de contactknoppen en "Versturen" in het contactformulier) en de skip-link (altijd met `black` als tekst), het "actief"-streepje onder de navigatie en het blokje in het mobiele menu, en de tekstselectie (oker op 45% met zwarte tekst). MUI `secondary.main`, `contrastText: black`.
- **Donker oker** (`ochreDark`): MUI `secondary.dark`, hover van de okerknoppen.

### Tertiary
- **Logoblauw** (`logoBlue`): alleen in het logo en als focusrand (2px, offset 2) op wit en op `background`, waar hij 3:1 haalt. Ook de focusrand om een fout invoerveld, zodat de rode rand blijft staan.

### Neutral
- **Gebroken wit** (`background`): de grond van elke pagina, ook van het mobiele menu. MUI `background.default`.
- **Wit** (`white`): appbar, footer (de tijdelijke logo-JPEG heeft een witte grond) losse panelen zoals het binnenzonweringsblok, het formulierpaneel en de werkbon, en invoervelden. MUI `background.paper`. Ook de focusrand op de olijfband.
- **Warm donkergrijs** (`ink`): lopende tekst, navigatielinks, tekst in placeholders, veldlabels en veldtekst, en de hoverrand van een invoerveld. MUI `text.primary`.
- **Gedempt grijs** (`muted`): secundaire tekst in de footer, "(optioneel)" en hints bij veldlabels, de tekenteller, de privacynotitie onder het formulier, de kolomkoppen "Wat"/"Wie" van de werkbon, en op Projecten de aantallen (snelmenu en soortkop) en de regel "Ook: …". MUI `text.secondary`.
- **Haarlijn** (`border`): sectiescheidingen, appbar- en footerrand, panelrand, stapscheidingen, rijen van de werkbon en van de dienstenlijst op Over mij, het snelmenu en de opleverlijst op Projecten. MUI `divider`. Niet voor invoervelden: op wit haalt hij geen 3:1.
- **Veldrand** (`inputBorder`): de rand van invoervelden in rust; haalt 3:1 op wit. Bron: `src/Theme/Components/inputs.ts`.
- **Placeholdervlak** (`placeholder`): vlak van `PhotoPlaceholder`.
- **Tekst op olijf** (`onOlive`, `onOliveMuted`): kop en lead in de contactband.
- **Zwart** (`black`): tekst op oker, selectietekst, basis van de schaduwtokens.
- **Fout** (`error`): MUI `error.main` voor formulierfouten: 2px rand van een fout veld, de foutmelding eronder, en rand en titel van de niet-verstuurd-melding.

### Named Rules
**The Nooit-wit-op-oker Rule.** Oker draagt altijd donkere tekst (`black`). Witte tekst op oker haalt geen AA en komt niet voor.

**The Oker-is-actie Rule.** Oker is een knopvlak voor contact (bellen, mailen, WhatsApp, en het versturen van het contactformulier) of het teken voor "actief". Geen okeren koppen, achtergronden, iconen of decoratie.

**The Blauw-blijft-logo Rule.** Logoblauw verschijnt alleen in het logo en als focusrand (ook om een fout invoerveld met focus). Op de olijfband wordt de focusrand wit, omdat blauw daar geen 3:1 haalt.

**The Gebroken-wit-is-grond Rule.** `background` is de grond van de hele pagina. Wit alleen voor appbar, footer, losse panelen en invoervelden.

**The Veld-is-herkenbaar Rule.** Een invoerveld is wit met een `inputBorder`-rand die 3:1 haalt, nooit alleen de haarlijn: de rand is wat een leeg veld als veld herkenbaar maakt.

## Typography

**Display Font:** Source Serif 4 (met Georgia, "Times New Roman", serif)
**Body Font:** Source Sans 3 (met system-ui, -apple-system, "Segoe UI", sans-serif)

**Character:** Een rustige, ambachtelijke schreefletter voor koppen naast een heldere humanistische schreefloze voor tekst. Beide van Adobe, zelf gehost als variabele woff2 (latin-subset) via `src/Theme/fonts.ts`; geen font-CDN. Bron van de schaal: `src/Theme/typography.ts`.

### Hierarchy
- **h1** (600, vloeiend 2.4 tot 3.75rem, 1.08, -0.015em): één per pagina, het aanbod.
- **h2** (600, vloeiend 1.9 tot 2.6rem, 1.15, -0.01em): sectiekoppen via `SectionHeader`, de soortkoppen op Projecten, en de contactband.
- **h3** (600, 1.375rem, 1.25): dienstnamen, stappen, taken in de werkbon, groepsnamen in de dienstenlijst op Over mij, projecttitels in de opleverlijst, paneelkoppen (ook "Stuur een bericht", "Werkgebied" en "Bedrijfsgegevens" op de contactpagina, als h2-element), de bevestiging na versturen.
- **subtitle1** (500, vloeiend 1.25 tot 1.5rem, 1.4, olijf): de slogan als lead onder de h1.
- **body1** (400, 1.125rem = 18px, 1.6): lopende tekst; regels begrensd op 40 tot 62ch.
- **body2** (400, 1rem, 1.55): korte samenvattingen onder dienstkaarten, de privacynotitie onder de verstuurknop, de regel "Ook: …" onder een project.
- **button** (600, 1.0625rem, geen hoofdletters, geen letterspatiëring).

Alle koppen zijn olijf, gewicht 600, `text-wrap: balance`; body heeft `text-wrap: pretty`. Stapnummers in de werkwijze op Home zijn Source Serif 4 500, 2.25rem, oldstyle-cijfers, olijf, los boven hun stap. In de werkbon op Over mij staan dezelfde nummers bewust kleiner, 1.75rem (zelfde letter, gewicht 500, oldstyle-cijfers, olijf, regelhoogte 1), omdat ze in de rij op de basislijn van de h3 staan; 2.25rem zou daar boven de taak uitsteken. Dit is de enige maat buiten de schaal, en alleen voor nummers naast een h3. Het "ik" achter elke taak is Source Serif 4 600 op h3-maat, olijf; de kolomkoppen "Wat" en "Wie" zijn 600, 1rem, `muted`. Formuliertekst: veldlabels 600, 1.0625rem, `ink`; veldtekst 1.125rem; hints, foutmeldingen (500) en de tekenteller 1rem, de teller met tabulaire cijfers.

### Named Rules
**The Royale-maat Rule.** Lopende tekst is minimaal 18px (`body1`); kleiner alleen voor korte samenvattingen (16px), footer, placeholderlabels, de kolomkoppen van de werkbon (16px), de regel "Ook: …" onder een project (16px) en de korte formulierhulp (labels 17px; hints, foutmeldingen, teller en privacynotitie 16px). Wat de bezoeker typt is 18px. De doelgroep is deels 50+.

**The Zelf-gehost Rule.** Fonts komen uit `src/Resources/Fonts` met hun OFL-licentie ernaast. Geen Google Fonts of ander CDN.

## Layout

Eén inhoudsbreedte voor de hele site: `contentMaxWidth` plus gutters (`pageGutter`, onder `sm` `pageGutterSmall`), centraal ingesteld op `MuiContainer` in `src/Theme/Components/layout.ts`. Maten in `src/Theme/sizes.ts`; spacing via `theme.spacing` (8px-basis).

Secties stapelen verticaal met `sectionSpacing` boven en onder, gescheiden door een haarlijn boven en onder. De appbar is sticky (`headerHeight`, onder `sm` `headerHeightSmall`); `scroll-padding-top` voorkomt dat ankers en de skip-link eronder landen.

Breakpoints zijn de MUI-standaard (sm 600, md 900, lg 1200) en worden alleen via `theme.breakpoints` gebruikt. Onder `md` vervalt de desktopnavigatie voor belknop + menuknop, worden tweekoloms blokken één kolom en komt tekst vóór de foto. Grids gebruiken `auto-fit`/`minmax` waar mogelijk (contactknoppen: naast elkaar zodra beide 320px halen). Fotoverhoudingen wisselen per breakpoint in plaats van een `minHeight` naast `aspectRatio`.

Contactpagina: een tweekoloms grid 5/7 met benoemde gebieden. Links de intro (h1, lead, `ContactButtons` gestapeld, max 420px) en daaronder, na een haarlijn, werkgebied en bedrijfsgegevens; rechts het witte formulierpaneel over beide rijen. Kolomafstand 64px, rijafstand 48px, bovenmarge `clamp(40px, 6vw, 88px)`, onder `sectionSpacing`. Onder `md` één kolom in de volgorde intro, formulier, gegevens; onder `sm` loopt het paneel 8px in de gutter. Geen contactband op deze pagina. Een veld met focus houdt 56px `scroll-margin-top`, zodat zijn label niet onder de sticky appbar verdwijnt.

Over mij: een intro in een tweekoloms grid 4/7 (portret 4:5 links, rechts h1, lead met `ownerName` uit `src/Config/company.ts`, tekst max 56ch en de `ContactButtons` naast elkaar, max 680px), kolomafstand 64px, verticaal gecentreerd. Vanaf `md` is de intro krapper dan op andere pagina's (boven 56px, onder `theme.spacing(8)`), zodat de kop van "Hoe ik werk" en de bovenkant van de werkbon op 1440×900 nog in het eerste scherm vallen; onder `md` gewone maten (boven `clamp(40px, 6vw, 88px)`, onder `sectionSpacing`), eerst tekst en knoppen, dan het portret (max 420px). Daarna twee secties met dezelfde 4/7-verdeling: links de `SectionHeader`, rechts de inhoud (gap 64px; onder `md` één kolom zonder gap, de kop draagt dan zijn eigen ondermarge). "Hoe ik werk" heeft haarlijnen boven en onder en de werkbon; "Wat ik doe" is een definitielijst met haarlijnen (groepsnaam als h3 in een kolom van 11rem, de diensten als één Nederlandse opsomming "a, b en c"; onder `sm` onder elkaar) met daaronder een outlined knop "Bekijk mijn projecten". De `ContactBand` sluit de pagina af.

Projecten: bovenaan een intro (boven `clamp(40px, 6vw, 88px)`) met h1, een lead in `body1` (max 58ch, 16px eronder) en 32px lager het snelmenu (zie Components). Daarna één sectie per soort, in de volgorde van `src/Config/services.ts` (Pvc-vloeren, Laminaat, Vloerbedekking, Tapijt, Binnenzonwering), elk met id `#<dienst-id>` zodat `/projecten#pvc` er direct heen gaat. Een soortsectie heeft bovenpadding `clamp(48px, 6vw, 80px)`; dat is krapper dan `sectionSpacing`, omdat de soorten samen één lijst vormen en geen losse secties. Een project met meer diensten staat onder elke soort. Na de laatste soort `sectionSpacing`, dan sluit de `ContactBand` de pagina af. Een anker landt onder de appbar via `scroll-padding-top`; omdat de browser bij het laden naar het anker springt voordat de pagina gerenderd is, scrolt `useScrollToHash` daarna alsnog naar de sectie.

## Elevation & Depth

Het systeem is vlak. Diepte en scheiding komen van haarlijnen (`border`, 1px) en van het verschil tussen gebroken wit, wit en olijf. Knoppen hebben `disableElevation`. Schaduw bestaat alleen voor wat boven de pagina zweeft: menu's en de mobiele drawer. Bron: `src/Theme/shadow.ts`, gemapt op de MUI-elevaties.

### Shadow Vocabulary
- **softShadow** (`0 1px 2px` zwart 6%): elevatie 1 tot 2.
- **mediumShadow** (`0 8px 24px -10px` zwart 25%): elevatie 3 tot 8, menu's.
- **strongShadow** (`0 16px 40px -16px` zwart 35%): elevatie 9 en hoger, de drawer.

### Named Rules
**The Haarlijn-niet-schaduw Rule.** Secties, panelen en kaarten scheiden met een 1px haarlijn. Schaduw alleen voor overlays (menu, drawer).

## Shapes

Zacht afgeronde, verder rechthoekige vormen. Eén radius (`borderRadius`, via `shape.borderRadius` in `src/Theme/theme.ts`) voor knoppen, icoonknoppen, panelen, invoervelden en de niet-verstuurd-melding. Fotoplaceholders zijn iets strakker (4px), links en focusranden 2px. Op mobiel verliest het binnenzonweringspaneel zijn foto-randen en radius aan de binnenkant. Geen cirkels, pillen of schuine vormen.

## Components

### Buttons
Stevig en rustig: een gevuld vlak, geen schaduw, geen hoofdletters. Bron: `src/Theme/Components/buttons.ts`.
- **Shape:** zacht afgerond (`borderRadius`), minimaal `touchTarget` hoog; `size="large"` minimaal 56px met 24px zijpadding.
- **Contactknop (contained secondary):** oker vlak, zwarte tekst, icoon links, label ("Bellen"/"Mailen") met het nummer of adres eronder in gewicht 400. Komt alleen voor via `ContactButtons`.
- **Verstuurknop (contained secondary, large):** hetzelfde okervlak met zwarte tekst, zonder icoon, links uitgelijnd onder het formulier; label "Versturen", tijdens verzenden "Bezig met versturen…".
- **Outlined primary:** olijf tekst en rand op transparant, met pijlicoon rechts; voor doorlinken ("Alle projecten bekijken", "Meer over mij", en in `size="large"` "Bekijk mijn projecten" op Over mij).
- **Hover / Focus:** achtergrond- en randkleur in 160ms ease-out naar de `dark`-toon. Focus: 2px `logoBlue` outline met offset 2 op elk `ButtonBase`-element; wit binnen de olijfband.
- **Icon button:** `touchTarget` vierkant, olijf, zelfde radius.

### ContactButtons (signatuur)
Twee even grote, even zware okerknoppen voor bellen en mailen, altijd samen, met nummer en e-mailadres zichtbaar. Staat `whatsappNumber` in `src/Config/company.ts` aan, dan sluit een derde, even zware WhatsApp-knop aan (nu uit). Layout `row` (naast elkaar zodra beide passen, anders onder elkaar) of `stack` (drawer). Gebruikt in hero, contactband, mobiel menu en (gestapeld) op de contactpagina. Bron: `src/Components/ContactButtons/ContactButtons.tsx`.

### Cards / Containers
- **Dienstkaart:** geen kaart: een fotoplaceholder, h3 en body2 direct op het gebroken wit.
- **Paneel:** wit, 1px haarlijn, `borderRadius`, foto en tekst naast elkaar; tekstpadding 32/40px (mobiel 24/20px).
- **Werkbon:** wit paneel met rijen; zie Werkbon hieronder.
- **Shadow Strategy:** geen; zie Elevation & Depth.

### Inputs / Fields
Wit en rustig, met een rand die je ziet. Bron: `src/Theme/Components/inputs.ts` (`MuiOutlinedInput`).
- **Style:** wit vlak, 1px `inputBorder`, `borderRadius`, tekst `ink` 1.125rem, padding 12/14px, minimaal `touchTarget` hoog. Hover: rand `ink`.
- **Focus:** 2px olijf rand; geen extra outline.
- **Error:** 2px `error` rand. Krijgt een fout veld focus, dan blijft de rode rand en komt de gewone focusrand (2px `logoBlue`, offset 2) eromheen.
- **Autofill:** de browser kleurt het veld niet; het blijft wit met `ink` tekst.
- Randkleur wisselt in 160ms ease-out.

### FormField
Eén veld met label erboven (600, 1.0625rem), optioneel "(optioneel)" in `muted`, een hint eronder in `muted` 1rem, het veld, en daaronder de foutmelding in `error` (500, 1rem), met rechts een tekenteller ("123 / 2000", tabulaire cijfers) voor lange tekst. Hint en fout zijn via `aria-describedby` aan het veld gekoppeld; `invalid` en `describedBy` laten een veld meedoen aan een groepsfout. Bron: `src/Components/FormField/FormField.tsx`.

### Contactformulier
Op één wit paneel met haarlijn en `borderRadius` (padding 40/48px, mobiel 24/20px), kop in h3. `noValidate`; de controle zit in `src/Helpers/validateContactMessage.ts` en de focus gaat naar het eerste foute veld. E-mail en telefoon staan als paar in een `fieldset` met een legend die alleen schermlezers horen (geen zichtbare kop of hint); de regel "één van beide" verschijnt pas als groepsfout onder het paar. Mislukt verzenden: een melding met 1px `error` rand rondom (geen zijstreep), titel "Niet verstuurd" in `error`, tekst in `ink` en links naar telefoon en e-mail. Gelukt: de bevestiging vervangt het formulier en krijgt de focus, met een outlined knop om nog een bericht te sturen. Onder de verstuurknop een korte privacynotitie met link. Bron: `src/Modules/Contact/Scenes/Contact/Components/ContactForm.tsx`.

### CompanyDetails
Bedrijfsnaam, KvK en btw onder elkaar, 1.125rem, regelhoogte 1.7; een ontbrekend gegeven in `muted`. Op de contactpagina op deze maat; de footer geeft een `className` mee die hem terugzet naar 1rem, gelijk aan de andere footerkolommen. Bron: `src/Components/CompanyDetails/CompanyDetails.tsx`.

### PhotoPlaceholder
Neutraal vlak (`placeholder`) met 1px haarlijn, 4px radius en een klein label linksonder ("Foto volgt"/"Projectfoto volgt"), vaste `aspectRatio` per gebruik, `aria-hidden`. Is de terugval van `Photo` op elke plek waar een echte foto van de PO hoort, ook in de opleverlijst op Projecten (4:3); nu staan daar tijdelijke stockfoto's (zie Tijdelijk). Bron: `src/Components/PhotoPlaceholder/PhotoPlaceholder.tsx`.

### Navigation
- **Appbar:** wit, sticky, haarlijn onder; `BrandLockup` (logo + "Kamerbreed Interieur" in Source Serif 4) links.
- **Desktop (vanaf md):** links in `ink`, 500, 1.0625rem, 48px hoog. Hover: olijf. Actief: olijf, 600, met een 3px oker streep die in 200ms vanaf links inschuift (uit bij reduced motion). Geen los telefoonnummer, zodat bellen en mailen gelijk blijven.
- **Mobiel (onder md):** belknop en menuknop (icoonknoppen). Het menu is een drawer van rechts (`min(360px, 88vw)`) op gebroken wit; het actieve item krijgt een okerblokje, onderaan staan de `ContactButtons` gestapeld.

### SectionHeader
h2 met optionele lead (`body1`) eronder, max 62ch, ondermarge 40px (onder `sm` 32px). Staat boven een sectie of, in de 4/7-secties op Over mij, als linkerkolom. Gebruikt op Home en Over mij. Bron: `src/Components/SectionHeader/SectionHeader.tsx`.

### Werkbon (signatuur, Over mij)
De rolverdeling van een klus, als een werkbon: wat er gebeurt en wie het doet, en achter elke taak staat "ik". Eén wit paneel met 1px haarlijn en `borderRadius` (onder `sm` 8px in de gutter, zoals het formulierpaneel). Bovenaan een kolomkoprij "Wat" links en "Wie" rechts (600, 1rem, `muted`, `aria-hidden`), met een haarlijn eronder. Daaronder een genummerde lijst (`ol`, CSS-teller); rijen gescheiden door haarlijnen, padding 24/40px (onder `sm` 20px). Elke rij is een grid op de basislijn: nummer (olijf, Source Serif 4 500, 1.75rem, oldstyle-cijfers; zie Typography), taak als h3, een stippellijn van olijf stippen op 45% (8px ritme) die de ruimte vult, en "ik" in olijf serif op h3-maat; schermlezers horen "Wie: ik". De toelichting (`body1`, max 48ch) staat eronder, ingesprongen onder de taak. Onder `sm` vervalt de stippellijn en staat "ik" rechts naast de taak. Geen slotzin onder de lijst: de rijen laten zien wat een zin zou beweren. Bron: `src/Modules/About/Scenes/About/Components/AboutWorkflow.tsx`.

### Snelmenu (Projecten)
Een `nav` ("Projecten per soort") tussen twee haarlijnen, boven en onder, met per soort een ankerlink naar zijn sectie. De links staan naast elkaar en lopen door over meerdere regels (kolomafstand 32px, onder `sm` 24px), elk minimaal `touchTarget` hoog: `ink`, 500, 1.0625rem, zoals de navigatie. Alleen de naam is onderstreept (1px, offset 0.2em, 2px bij hover); het aantal staat er los naast in `muted`, 400, tabulaire cijfers, zonder onderstreping. Hover: olijf. Schermlezers horen naam en aantal als één label ("Pvc-vloeren, 3 projecten"). Geen knoppen, chips of filters: het snelmenu springt naar een plek op de pagina en verbergt niets. Bron: `src/Modules/Projects/Scenes/Projects/Components/ProjectsIntro.tsx`.

### Opleverlijst (signatuur, Projecten)
Het opgeleverde werk per soort, rij na rij, zoals een vakman het in een map bijhoudt. Kop: de soortnaam als h2 met rechts het aantal ("3 projecten", "1 project", "Nog geen projecten") in `body1` `muted`, op de basislijn, met 16px eronder en een haarlijn; onder `sm` staat het aantal altijd onder de h2, zodat elke soort hetzelfde begint. Daaronder een lijst zonder opsommingstekens; elke rij heeft een haarlijn eronder en padding 32px boven en onder (onder `sm` 24px). Een rij is een grid 4/7 (gap 40px, onder `md` 24px): links de foto 4:3 met 4px radius, zolang er geen echte foto is een `PhotoPlaceholder` "Projectfoto volgt"; rechts de titel als h3, de tekst in `body1` (max 52ch) en, als het project ook onder andere soorten valt, een regel "Ook: …" in `body2` `muted` met die diensten als Nederlandse opsomming. Onder `sm` één kolom, de foto boven de tekst (gap 16px). Een soort zonder projecten toont één regel `body1` ("Hier komen binnenkort foto's van mijn werk.") met een haarlijn eronder. Geen kaarten, schaduw, filterknoppen of lightbox. Bron: `ProjectGroup.tsx` en `ProjectRow.tsx` in `src/Modules/Projects/Scenes/Projects/Components/`.

### Contactband
Olijf vlak in twee verticaal gecentreerde kolommen (5/7): links `onOlive` kop en `onOliveMuted` lead (max 46ch), rechts alle acties als één blok: de `ContactButtons` en daaronder over de volle breedte een outlined knop "Of stuur een bericht" naar `/contact` in `onOlive` (rand 70%, bij hover vol met een vlak van 8%). Zo is het formulier vindbaar zonder bellen of mailen te verdringen. De afsluiting van een inhoudspagina, nu op Home, Over mij en Projecten. Niet op de contactpagina. Focusrand wordt hier wit. Bron: `src/Components/ContactBand/ContactBand.tsx`.

### Footer
Wit met haarlijn boven: merk en slogan, contact, pagina's, bedrijfsgegevens (`CompanyDetails`, 1rem) in kolommen met serif-koppen (600, 1.125rem, olijf); links onderstreept.

### Links
Altijd onderstreept (1px, offset 0.2em, `currentColor`), 2px bij hover, focusrand in logoblauw. Bron: `overrideMuiLink` in `src/Theme/Components/layout.ts`.

### SkipLink
Oker vlak met zwarte tekst, logoblauwe focusrand; eerste focusbare element.

## Do's and Don'ts

### Do:
- **Do** gebruik oker alleen als knopvlak met `black` tekst of als "actief"-teken.
- **Do** toon bellen en mailen altijd samen en even zwaar, via `ContactButtons`.
- **Do** scheid secties met een 1px `border`-haarlijn en `sectionSpacing`.
- **Do** gebruik `background` als paginagrond; wit alleen voor appbar, footer, losse panelen en invoervelden.
- **Do** geef elk bedienbaar element minimaal `touchTarget` (48px) en een 2px `logoBlue` focusrand met offset 2 (wit op olijf). Invoervelden tonen focus met een 2px olijf rand.
- **Do** bouw formuliervelden met `FormField`: label erboven, fout eronder in `error`, `inputBorder` als rand.
- **Do** toon beeld via `Photo` (`src/Components/Photo/Photo.tsx`): een foto op een vaste verhouding (`object-fit: cover`, 4px radius, `loading="lazy"` behalve in het eerste scherm), of `PhotoPlaceholder` zolang de foto ontbreekt.
- **Do** haal kleuren uit `src/colors.ts` en maten uit `src/Theme/sizes.ts`.

### Don't:
- **Don't** zet witte tekst op oker.
- **Don't** gebruik logoblauw buiten het logo en de focusrand.
- **Don't** gebruik schaduw voor kaarten, panelen of secties; alleen menu's en de drawer hebben diepte.
- **Don't** maak bellen of mailen dominanter dan de ander, ook niet met een los nummer in de desktop-appbar.
- **Don't** gebruik gegenereerde of stockbeelden in de live site; die zouden doorgaan voor zijn werk. (Uitzondering: de tijdelijke voorbeeldfoto's, zie Tijdelijk.)
- **Don't** laad fonts via een CDN.
- **Don't** zet lopende tekst kleiner dan 18px.
- **Don't** geef een invoerveld de haarlijn (`border`) als rand; die haalt op wit geen 3:1.

## Tijdelijk

Wat in de build staat maar niet blijvend is (geen ontwerpregel):
- **Logo:** `src/Resources/Logo/kamerbreed-logo.jpeg`, gedownload van de oude site (310 × 264, witte grond). Vervangen door het origineel zodra de PO het stuurt.
- **Teksten:** lorem ipsum; de PO schrijft de definitieve teksten.
- **Foto's:** tijdelijke stockfoto's (CC0, `src/Resources/Photos/Temp/`, herkomst in `src/Resources/README.md`) op alle beeldplekken, voor het eerste voorbeeld-design (13-10-2026). Niet zijn werk: vóór livegang vervangen door foto's van de PO. De eigenaarfoto laat bewust geen gezicht zien. Een plek zonder foto valt terug op `PhotoPlaceholder`.
