# Launch-checklist

Dingen die makkelijk vergeten worden maar juridisch, ethisch of qua toegankelijkheid zwaar wegen. Loop deze lijst door **voordat het project als af wordt beschouwd** (oplevering, deploy naar productie, "we zijn klaar"). Het project is pas af als elk punt is afgevinkt of expliciet als "n.v.t." is gemotiveerd.

## Werkwijze

- Tijdens het werk: kom je iets tegen dat hier onder valt (bv. een formulier, een externe script, een afbeelding), regel het meteen of noteer het onder "Openstaand" onderaan.
- Bij afronding: loop elk punt na, controleer in de code/content (niet uit je hoofd) en meld per sectie wat gedaan is, wat n.v.t. is en wat nog openstaat.
- Kun je iets niet zelf invullen (bv. bedrijfsgegevens, juridische tekst)? Vraag het aan de gebruiker, verzin niets, en laat het niet stilletjes als placeholder staan.
- Juridische teksten die je genereert zijn een concept; wijs erop dat ze door de eigenaar of een jurist gecontroleerd moeten worden.

## Juridische pagina's

- [ ] **Privacybeleid**: welke data, waarvoor, grondslag, bewaartermijn, derden, rechten van betrokkenen, contactpunt. Gelinkt vanuit de footer en bij elk formulier.
- [ ] **Algemene voorwaarden** (terms of service), indien er diensten/producten/accounts zijn.
- [ ] **Retour-/refundbeleid**, indien er iets verkocht wordt (incl. herroepingsrecht).
- [ ] **Cookiebeleid**: lijst van cookies/local storage met doel en looptijd.
- [ ] **Bedrijfsgegevens**: bedrijfsnaam, adres, e-mail, KvK-/BTW-nummer, waar wettelijk vereist. Zichtbaar (footer/contact/impressum).

## Privacy & data

- [ ] **Cookie consent banner**: geen niet-essentiële cookies/trackers vóór toestemming; weigeren even makkelijk als accepteren; keuze later te wijzigen.
- [ ] **Formulieren**: consent-checkbox waar nodig (niet vooraf aangevinkt), duidelijke link naar privacybeleid, alleen verplichte velden verplicht.
- [ ] **Geen onnodige data**: elk veld/tracking-punt heeft een reden; verwijder wat we niet nodig hebben (dataminimalisatie).
- [ ] **Third-party SDK's en scripts auditen**: `package.json`, `index.html`, embeds (analytics, fonts via CDN, chat, maps, video, pixels). Wat laden ze, wat sturen ze door, staat het in het privacybeleid, is er een verwerkersovereenkomst nodig?
- [ ] **Leeftijdstoestemming**: worden er gegevens van kinderen verzameld (of kunnen ze dat)? Zo ja: leeftijdscheck en ouderlijke toestemming volgens de lokale wet (AVG: onder 16, NL; elders vaak 13).
- [ ] **Data verwijderen**: gebruiker kan zijn gegevens/account laten verwijderen (of er is een duidelijk verzoekkanaal), en dit staat in het privacybeleid.
- [ ] **Uitschrijflink in e-mails**: elke marketing-/nieuwsbriefmail heeft een werkende, één-klik uitschrijflink en een afzenderadres.

## Eerlijkheid & dark patterns

- [ ] **Dark patterns verwijderen**: geen misleidende knoppen, verborgen opt-outs, valse urgentie/schaarste, confirmshaming, moeilijk op te zeggen, vooraf aangevinkte opties.
- [ ] **Geen verborgen kosten**: totaalprijs incl. btw, verzend- en servicekosten zichtbaar vóór afrekenen.
- [ ] **Geen nepreviews/testimonials**: alle reviews, logo's, ratings en cijfers zijn echt en verifieerbaar. Placeholder-content ("Jan Jansen, 5 sterren") is weg.
- [ ] **Geen onbewezen claims**: superlatieven, cijfers ("10.000 klanten"), certificeringen, garanties en "#1" zijn te onderbouwen, of verwijderd.

## Toegankelijkheid

- [ ] **Alt-tekst**: elke betekenisvolle afbeelding heeft beschrijvende `alt`; decoratieve afbeeldingen `alt=""`; icoonknoppen hebben `aria-label`.
- [ ] **Kleurcontrast**: WCAG AA (4.5:1 tekst, 3:1 grote tekst en UI-elementen), zowel in `src/colors.ts` als in het theme; check ook hover-/disabled-/focusstaten.
- [ ] **Toetsenbordnavigatie**: alles bedienbaar met Tab/Enter/Space/Esc, logische volgorde, zichtbare focusstijl (niet weghalen), geen keyboard traps in modals/menu's, skip-link naar hoofdinhoud.

## Licenties

- [ ] **Fonts en afbeeldingen**: elke font, foto, illustratie en icoon heeft een licentie die commercieel gebruik toestaat; bronvermelding waar vereist. Leg herkomst vast (bv. in `src/Resources/` README of `LICENSES.md`).
- [ ] **Dependencies**: geen pakketten met een licentie die niet bij het project past (bv. AGPL/GPL in een gesloten project). Bij een nieuwe npm- of NuGet-dependency: licentie checken en `LICENSES.md` bijwerken.

## Openstaand

_Noteer hier tijdens het werk punten die vóór oplevering nog geregeld moeten worden. Leeg = niets bekend, niet = alles gedaan; loop de lijst hierboven altijd volledig na._

- Teksten van de PO staan op de site (28-10-2026); typfouten verbeterd en overal "u/uw" (29-10-2026, besluit van de gebruiker; de PO had in `Gesprek-PO.md`, vraag 10, "je" goedgekeurd, dus even melden). Nog lorem: het bevestigingsbericht van het formulier.
- Adres: de PO wil zijn (woon)adres niet op de site, maar art. 3:15d BW vraagt waarschijnlijk wel het vestigingsadres. Besloten 29-10-2026: het adres komt nergens op de site (ook niet in de privacyverklaring). Bekend risico; de PO kan eventueel bij de KvK of zijn boekhouder navragen of dat mag, of een ander (post)adres gebruiken (`Gesprek-PO.md`, vraag 1).
- KvK-nummer 27067893 en rechtsvorm vof bevestigd (29-10-2026). Btw-nummer staat erin (28-10-2026); het * achter het nummer in zijn document is opmaak en hoeft niet bij het nummer (29-10-2026).
- Instagram alleen als gewone link, geen ingesloten feed of embed (die laadt scripts van Meta, en dan zijn cookieconsent en een privacyverklaring nodig).
- Sfeerbeelden van de PO (28-10-2026) op Home en bij de diensten: allemaal gemaakt met ChatGPT, commercieel gebruik toegestaan volgens de opdrachtgever (29-10-2026; herkomst vastgelegd in `src/Resources/README.md`). Zuiver AI-beelden zijn waarschijnlijk niet auteursrechtelijk beschermd en OpenAI garandeert geen vrijheid van rechten van derden. Nog nagaan: of een AI-label nodig is (AI Act art. 50). Niet presenteren als zijn werk.
- Foto's van de PO: herkomst en toestemming vastleggen in `src/Resources/README.md`. Komen er ooit foto's van zijn werk: geen klantnamen, huisnummers of herkenbare personen zonder toestemming.
- Logo: de JPEG van 310 × 264 px is het originele bestand van de PO (28-10-2026); een groter bestand is er niet. Eigen logo van de PO, dus geen licentiepunt.
- Contactformulier: verstuurt pas als de backend in `/server` er is (`contactEndpoint` in `src/Config/api.ts`). De privacyverklaring op `/privacy` is geschreven (29-10-2026, concept) en beperkt zich tot het formulier. Vóór livegang laten bevestigen door de PO of een jurist: de bewaartermijn (nu zes maanden na afhandeling), dat er verwerkersovereenkomsten zijn met Brevo en TransIP, en dat het adres (art. 3:15d BW) klopt met zijn keuze. Klopt de backend niet met de tekst (bv. berichten in een database, serverlogs met IP-adressen), dan de tekst aanpassen. Een consent-checkbox is niet nodig zolang de gegevens alleen gebruikt worden om te reageren.
- Werkgebied op Contact: "in het Westland" (29-10-2026), geen lijst met kernen meer. Bevestigd: hij komt overal in het Westland.
- Placeholders die vóór livegang weg moeten: "Foto volgt"-vlakken, en het lorem-bevestigingsbericht van het formulier.
- Over mij: nog geen portret (placeholder). De tekst is van de PO zelf, inclusief "bijna 30 jaar" en "drie generaties" (ook op Home); dat zijn zijn eigen claims, laten bevestigen (`Gesprek-PO.md`, vraag 12).
