# Gesprek PO

- **★ = zeker stellen.** De rest als er tijd is.
- _Cursief_ staat wat ik doe als hij het niet weet. "Weet ik niet, doe maar" is dus ook een goed antwoord; schrijf het dan op.

## Besloten

Kennismakingsgesprek 12-10-2026, aangevuld met wat daarvoor al bekend was.

### Bedrijf

- **Naam op de site:** Kamerbreed Interieur.
- **Wat hij doet:** vooral vloeren, alles behalve steen: pvc, laminaat, vloerbedekking en tapijt. Daarnaast raambekleding binnen (binnenzonwering). Bijgesteld 13-10-2026: vloerbedekking erbij, vloeronderhoud staat niet meer op de site. Bijgesteld 28-10-2026 (zijn teksten): pvc-vloeren, tapijt, houten vloeren, laminaat en egaliseren; vloerbedekking staat er niet meer apart in.
- **Werkwijze:** hij werkt alleen, komt bij de klant thuis en doet alles zelf van begin tot eind. De klant heeft één aanspreekpunt, er zit niemand tussen. Dit is het verschil met anderen. Het hoeft niet uitgebreid op de site, maar moet er wel uit spreken.
- **Klanten:** in het Westland.
- **Hoe klanten hem nu vinden:** via via. Met de site wil hij ook nieuwe klanten bereiken.
- **Showroom:** heeft hij niet. Hij werkt vanuit huis. Het adres wil hij niet op de site (zie "Nog open").

### Wat moet de site doen

- **Doel:** informatie geven en contact opleveren.
- **Pagina's:** Home · Over mij · Contact (Projecten is weggehaald op 28-10-2026: er zijn geen projectfoto's). Er komt geen aparte dienstenpagina; de diensten staan op Home. Het is "Over mij" en niet "Over ons", omdat hij alleen werkt.
- **Instagram:** ergens op de site.
- **Prijzen:** niet op de site.
- **Onderhoud:** weinig. Ongeveer één keer per jaar komen er projecten bij. Ik pas dat aan, hij hoeft niet in te loggen.

### Inhoud en gegevens

- **Telefoon (06-22243488) en e-mail (info@kamerbreedinterieur.nl):** mogen op de site.
- **Teksten:** schrijft hij zelf. Ontvangen 28-10-2026 (`Website.pages`, omgezet naar `src/Extra info/Website.md`) en 1 op 1 op de site gezet. Waar hij geen tekst gaf, staat er nu geen.
- **Projectfoto's:** stuurt hij later.

### Uitstraling

- **In twee woorden:** netjes en persoonlijk.
- **Logo en slogan** ("Thuis kiezen en je thuis voelen!") blijven. Het logo staat samen met de bedrijfsnaam in de appbar.
- **Kleuren:** die van de huidige "in aanbouw"-pagina blijven, want die bevallen hem. Gemeten op een screenshot:

  | Rol | Kleur |
  |---|---|
  | Achtergrond | `#F0F1EE` gebroken wit |
  | Koppen | `#4F4A30` donker olijfbruin |
  | Lopende tekst | `#4F4E4A` warm donkergrijs |
  | Knop | `#D49259` oker/terracotta, met witte tekst |
  | Logo | blauw `#0884AF`, zwart `#1D1F1E`, wit |

  De koppen staan in een klassieke schreefletter, de rest in een ronde schreefloze letter. De fonts zoek ik nog uit.
  Let op: witte tekst op de okerkleur heeft een contrast van ongeveer 2,6:1 en haalt WCAG AA niet. Dat los ik op in het design (bijvoorbeeld donkere tekst op de knop, of een donkerdere tint oker).
  **Gekozen (13-10-2026):** een donkerdere tint, koper `#A06029` (hover `#8E5525`), met witte tekst: 5,0:1. Eerst stond er zwarte tekst op de oude oker; dat vond de ontwikkelaar niet mooi. Laten zien aan de PO, want de knop is donkerder dan op de oude site.
- **Voorbeeldsites:** heeft hij niet.
- **Wat hij absoluut niet wil:** niets genoemd.

### Domein en hosting

Domein en hosting lopen via Mijndomein. Daar staat nu de WordPress-pagina "Website in aanbouw". De nieuwe site vervangt die.

## Nog open

Vragen voor een volgend contact (bellen of appen is genoeg).

1. ~~★ **Adres.**~~ Bevestigd door de PO (29-10-2026): het adres staat klein in de footer. Hij wil zijn adres niet op de site. Een zakelijke website moet volgens de wet waarschijnlijk wel het vestigingsadres noemen (art. 3:15d BW). Het adres staat bovendien al openbaar bij de KvK, BD Line en Telefoonboek. Ik laat hem kiezen tussen:
   - het adres alleen in de footer, bij de bedrijfsgegevens, zonder "showroom" of "kom langs";
   - zelf navragen of het zonder adres mag, bijvoorbeeld bij de KvK of zijn boekhouder.

   _Adres alleen klein in de footer bij KvK- en btw-nummer._ Herzien 29-10-2026: het adres staat toch klein in de footer, omdat art. 3:15d BW waarschijnlijk een vestigingsadres vraagt. Het is zijn woonadres. Bevestigd door de PO (29-10-2026).
2. ★ **KvK en btw.** ~~Klopt KvK-nummer 27067893?~~ Ja, en het is een vof (29-10-2026). ~~Wat is het btw-nummer?~~ NL803473655B01 (28-10-2026; het * in zijn document is opmaak, 29-10-2026)
3. ★ **Contact.** Hoe wil hij benaderd worden: bellen, mailen, WhatsApp? Staat WhatsApp op het 06-nummer? _Knoppen voor bellen, mailen en WhatsApp, geen contactformulier. Bij een formulier worden berichten opgeslagen en is een privacyverklaring nodig._
4. ★ **Instagram.** ~~Wat is de accountnaam of link?~~ kamer.breed.interieur (28-10-2026), als link in de footer. _Alleen een link met icoon (in de footer en op Contact), geen ingesloten feed. Een feed laadt scripts van Meta, en dan zijn een cookiebanner en privacyverklaring nodig._
5. ~~**Projecten.**~~ Vervallen: de pagina is weg (zie 14).
6. **Over mij.** ~~Wil hij met naam~~ (ja: "Jeroen van der Eijk" in zijn tekst, 28-10-2026) en foto op die pagina? Mag erbij dat het bedrijf er sinds 1994 is (KvK)? _Ja, met naam ("Jeroen" staat er al), en een foto als hij die stuurt. 1994 weglaten._
7. **Particulier of zakelijk.** Werkt hij ook voor bedrijven? _De site richt zich op particulieren._
8. **Binnenzonwering.** Hoe groot is dat deel van zijn werk? Wil hij de merknaam BD Line noemen, en mag hij hun beeldmateriaal gebruiken? _Binnenzonwering kort noemen naast de vloeren, zonder merknaam en zonder beeld van BD Line._
9. **Reviews.** Heeft hij echte reviews (Google, Werkspot) of keurmerken en garanties? _Geen reviews op de site. Het cijfer op Telefoonboek (5,6, laatste review uit 2017) gebruiken we niet._
10. ~~**Teksten nalopen.**~~ Verwerkt op de site (29-10-2026). Zijn teksten staan 1 op 1 op de site. Mag ik dit verbeteren?
    - Typfouten: "Van persoonlijk advies **to** vakkundige plaatsing" (tot), "een vertrouwde wereld waarin **in** opgroeide" (ik), "echt hout. **tijdloos**" (hoofdletter), geen punt na "betaalbaarheid".
    - ~~Je of u:~~ Home, de diensten en Over mij zeggen "je/jouw", de werkwijze "u", en stap 3 begint met "ik verzorg" en eindigt met "Zo heb **je**". Besloten 29-10-2026: overal "u", een keuze van de PO zelf.

    _Typfouten verbeterd, overal "u"._
11. **Vloerbedekking.** Stond eerst als aparte dienst, in zijn teksten niet meer. Valt het onder tapijt, of doet hij het niet meer? _Weglaten._
12. **"Bijna 30 jaar ervaring" en "drie generaties".** Staat nu op Home en Over mij. Klopt dat met de KvK (sinds 1994)? _Laten staan, het is zijn eigen tekst._
13. **Foto's (28-10-2026).** Waar komen de zeven foto's vandaan die hij stuurde? ~~Ze lijken met AI gemaakt. Met welk programma, en mag het beeld commercieel gebruikt worden?~~ Allemaal ChatGPT, commercieel gebruik mag (29-10-2026). Heeft hij ze groter dan 640 px? _Gebruiken als sfeerbeeld bij Home en de diensten. Groter formaat hoeft niet als het er niet is._
14. ~~**Projectenpagina.**~~ Weggehaald op 28-10-2026: er zijn geen projectfoto's. Wil hij ooit zijn werk laten zien, dan kan hij foto's sturen en komt de pagina terug (staat in de git-historie).
15. ~~**Bevestiging contactformulier.**~~ De PO laat de tekst aan ons over (29-10-2026). Nu: "Bedankt, uw bericht is verstuurd." met daaronder "Ik neem zo snel mogelijk contact met u op. Heeft u haast? Bel me dan op 06-22243488." Laten zien bij de oplevering.

## Na het gesprek opsturen

- [x] Logo: de JPEG van 310 px is het origineel; een groter bestand is er niet (28-10-2026)
- [ ] ~~Foto's van projecten~~ (vervallen, de projectenpagina is weg)
- [ ] Foto van hemzelf voor "Over mij" (als hij die wil)
- [x] Btw-nummer
- [ ] Inloggegevens van Mijndomein, of een contactpersoon daar
- [x] Link naar Instagram
- [ ] Links naar echte reviews, keurmerken of garanties (als die er zijn)
- [x] Teksten per pagina (28-10-2026)

## Gevonden op internet vóór het gesprek (12-10-2026)

| Wat | Gevonden | Bron |
|---|---|---|
| Naam in KvK | Kamerbreed Interieur Jeroen van der Eijk | [Drimble](https://drimble.nl/bedrijf/naaldwijk/7511752/kamerbreed-interieur-jeroen-van-der-eijk.html) |
| Rechtsvorm | Vennootschap onder firma (vof), 1 medewerker | Drimble |
| KvK-nummer | 27067893 (hoofdvestiging 000007511752) | Drimble, nummer klopt volgens kvk.nl |
| Sinds | 1 januari 1994 | Drimble |
| Adres | Schubertstraat 13, 2671 TA Naaldwijk (Westland) | [BD Line](https://www.bdline.nl/verkooppunten/kamerbreed-interieur-jeroen-van-der-eijk), [Telefoonboek](https://www.telefoonboek.nl/bedrijven/t2669945/naaldwijk/kamerbreed-interieur-jeroen-van-der-eijk/) |
| Showroom | "Showroom aan huis, op afspraak". **Klopt niet meer:** er is geen showroom. | BD Line, Telefoonboek |
| Telefoon | 06-22243488 | BD Line, Telefoonboek |
| E-mail | info@kamerbreedinterieur.nl | BD Line |
| Producten | Dealer van BD Line raambekleding. **In het gesprek bleek:** vooral vloeren, raambekleding komt erbij. | BD Line, Telefoonboek |
| Website | kamerbreedinterieur.nl: WordPress-pagina "Website in aanbouw" met slogan en logo. Hosting en e-mail via Mijndomein. | kamerbreedinterieur.nl |
| Logo | "KAMER" in blauwe horizontale strepen (als een jaloezie), "BREED" wit op een zwarte tapijtrol, "INTERIEUR" in blauwe blokletters. Online alleen als kleine JPEG (320 px breed). | kamerbreedinterieur.nl |
| Reviews | Telefoonboek: 5,6/10 uit 19 beoordelingen, bijna alleen cijfers zonder tekst, laatste uit 2017. Geen Google-reviews, Werkspot of socials gevonden. | Telefoonboek |
| Niet verwarren met | Kamerbreed (kamerbreed.be), een Belgisch interieurbedrijf. kamerbreed.nl is van een ander bedrijf en staat te koop. | |
