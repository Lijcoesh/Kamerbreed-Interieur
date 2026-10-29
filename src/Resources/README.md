# Herkomst van statische bestanden

## Logo

| Bestand | Herkomst | Licentie | Status |
|---|---|---|---|
| `Logo/kamerbreed-logo.jpeg` | Gedownload van de oude site: `https://kamerbreedinterieur.nl/wp-content/uploads/2025/01/KamerBreed_Interieur_logo.jpeg` (12-10-2026). 310 × 264 px. | Eigen logo van de PO. | Dit is het originele bestand: de PO stuurde op 28-10-2026 precies dezelfde JPEG. |
| `Logo/kamerbreed-logo.png` | Afgeleid van de JPEG hierboven (28-10-2026): de witte achtergrond rond het logo transparant gemaakt (vanaf de randen, met zachte overgang), zodat het op de donkerdere appbar staat. Het wit binnen het logo is gebleven. Dit bestand wordt gebruikt. | Eigen logo van de PO. | |

## Fonts

Zelf gehost, geen Google Fonts-CDN. Alleen de latin-subset.

| Bestand | Font | Bron | Licentie |
|---|---|---|---|
| `Fonts/source-serif-4-latin-opsz-normal.woff2` | Source Serif 4 (variabel: gewicht en optische grootte) | npm `@fontsource-variable/source-serif-4@5.3.1` | SIL OFL 1.1, zie `Fonts/OFL-SourceSerif4.txt` |
| `Fonts/source-sans-3-latin-wght-normal.woff2` | Source Sans 3 (variabel gewicht) | npm `@fontsource-variable/source-sans-3@5.3.1` | SIL OFL 1.1, zie `Fonts/OFL-SourceSans3.txt` |
| `Fonts/source-sans-3-latin-wght-italic.woff2` | Source Sans 3 Italic | idem | idem |

Beide fonts zijn van Adobe en mogen commercieel gebruikt worden. De OFL vraagt dat de licentietekst met de fonts meegaat: die staat ernaast.

## Iconen

Getekend als SVG-paden in `src/Components/Icons/`:

- Phone, Email, Menu, Close, ArrowForward: Material Icons van Google, Apache-2.0.
- Instagram: Material Design Icons van Pictogrammers, Apache-2.0.

## Foto's

### Van de PO

Leg bij elke foto vast wie hem gemaakt heeft en of er toestemming is (zie de launch-checklist).

#### Sfeerbeelden bij Home en de diensten (28-10-2026)

Gestuurd door de PO, met als bestandsnaam de plek waar hij ze wil hebben. Omgezet van PNG (640 px) naar JPEG, kwaliteit 85; de herkomst staat ook in elk bestand (JPEG-commentaar). Gekoppeld in `src/Config/photos.ts` (`home.jpg`) en `src/Config/services.ts`.

**Herkomst:** alle beelden zijn gemaakt met ChatGPT (opgave van de opdrachtgever, 29-10-2026). De voorwaarden van OpenAI staan commercieel gebruik toe; zuiver AI-beelden zijn waarschijnlijk niet auteursrechtelijk beschermd. Gebruik ze als sfeerbeeld, niet als zijn werk. Nog nagaan: of een AI-label nodig is (AI Act art. 50).

| Bestand | Origineel van de PO | Herkomst | Licentie |
|---|---|---|---|
| `Photos/home.jpg` | `1ste foto.PNG` | onbekend | onbekend |
| `Photos/Services/pvc.jpg` | `PVC.PNG` | onbekend | onbekend |
| `Photos/Services/tapijt.jpg` | `Tapijt.PNG` | onbekend | onbekend |
| `Photos/Services/houten-vloeren.jpg` | `Houten Vloeren.PNG` | onbekend | onbekend |
| `Photos/Services/laminaat.jpg` | `Laminaat.PNG` | onbekend | onbekend |
| `Photos/Services/egaliseren.jpg` | `Egaliseren.PNG` | onbekend | onbekend |
| `Photos/Services/binnenzonwering.jpg` | `Foto voor bij binnen zonwering.PNG` | onbekend | onbekend |

#### Portret

Nog geen.
