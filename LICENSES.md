# Licenties van dependencies

Bij elke nieuwe npm- of NuGet-dependency: licentie checken en hier bijwerken. Bij elke build schrijft Vite de licentieteksten van alles wat in de bundle zit naar `dist/licenses.md` (`build.license` in `vite.config.ts`).

## Frontend (npm)

Nagelopen in oktober 2026. In de bundle (`dependencies`): MIT en BSD-3-Clause (`hoist-non-react-statics`).

Alleen bij het bouwen (`devDependencies`, niet in de bundle): dezelfde toolchain als WaterZacht (MIT, Apache-2.0, ISC, BSD, BlueOak-1.0.0, CC-BY-4.0 voor `caniuse-lite`, MPL-2.0 voor `lightningcss`).

## Backend (NuGet)

Dezelfde pakketten als de API van WaterZacht. In de API: `Microsoft.Extensions.*` (MIT) en Polly (BSD-3-Clause).

Alleen bij het bouwen en testen, niet in de publish:

- Analyzers: StyleCop en Roslynator (Apache-2.0), Nullable.Extended (MIT), SonarAnalyzer (Sonar Source-Available License 1.0: vrij te gebruiken, behalve in een product dat met SonarQube concurreert).
- Tests: xUnit en Castle.Core (Apache-2.0), Moq (BSD-3-Clause), Microsoft.NET.Test.Sdk (MIT).

Geen GPL of AGPL.

## Fonts en iconen (geen npm-dependency)

Zelf gehost in `src/Resources/` en `src/Components/Icons/`; herkomst per bestand staat in `src/Resources/README.md`.

- Fonts: Source Serif 4 en Source Sans 3, SIL OFL 1.1 (licentietekst naast de fontbestanden).
- Iconen: Material Icons en Material Design Icons, Apache-2.0.
