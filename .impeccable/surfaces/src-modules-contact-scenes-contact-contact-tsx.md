---
version: 1
slug: "src-modules-contact-scenes-contact-contact-tsx"
primary_target: "src/Modules/Contact/Scenes/Contact/Contact.tsx"
related_targets: []
---

# Contact

Scope: `/contact`. Mode: Operate (de bezoeker wil hem bereiken). Erft de wereld uit DESIGN.md; geen nieuwe tokens.

Bezoeker: meestal op de telefoon, kent hem al half. Taak: direct bellen of mailen, of een bericht achterlaten. Moet daarnaast zien dat hij in zijn dorp komt (werkgebied) en wie het bedrijf is (bedrijfsgegevens).

Inhoud (gebruiker, 13-10-2026): knoppen voor bellen en mailen, WhatsApp-knop die uit staat tot de PO hem bevestigt, contactformulier, werkgebied, bedrijfsgegevens. Geen "wat gebeurt er daarna" en geen bereikbaarheidstijden.

Formulier: velden naam, e-mail, telefoon (één van beide verplicht), bericht; honeypot tegen spam. Verzenden later via een eigen .NET-backend in `/server` (VPS, Brevo, conventies van UpNext.API); tot die tijd meldt het formulier dat verzenden nog niet werkt en verwijst het naar bellen en mailen. Frontend controleert minstens zo streng als de API straks.

## Direction contract

THESIS: Links staat wat je direct kunt doen of weten, rechts een rustig formulier voor wie liever schrijft. Geweigerd: het formulier als enige ingang en een contactpagina vol kaarten.

OWN-WORLD: DESIGN.md ongewijzigd: gebroken wit als grond, olijf koppen in Source Serif 4, oker alleen als knopvlak met zwarte tekst (Bellen, Mailen, WhatsApp, Versturen), formulier op één wit paneel met haarlijn, velden wit met haarlijn en olijf focusrand, labels boven het veld, foutmelding eronder in `error`.

STORY: Bezoeker ziet "Contact" en de bekende okerknoppen, belt of mailt meteen, of schrijft een bericht; ziet dat zijn kern in het Westland erbij staat en wie het bedrijf is.

FIRST VIEWPORT: Appbar. Daaronder twee kolommen (5/7): links h1 "Contact", één zin, Bellen en Mailen onder elkaar; rechts een wit paneel met kop "Stuur een bericht" en de eerste velden. Onder de linkerkolom werkgebied (kernen) en bedrijfsgegevens. Mobiel: h1, knoppen, formulier, dan werkgebied en bedrijfsgegevens. Geen olijfband op deze pagina: de pagina is zelf het contact.

FORM: Surface-ronde, tweede hand (veilig), kaart "Gegevens links, formulier rechts" op positie 5 van de eigen lijst; seed 79c1743a, reroll 1.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

- Backend en verzenden (TODO.md), privacyverklaring (launch-checklist), WhatsApp-nummer, werkgebied laten bevestigen door de PO, teksten.
