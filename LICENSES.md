# Licenties van dependencies

Bij elke nieuwe npm-dependency: licentie checken en hier bijwerken. Bij elke build schrijft Vite de licentieteksten van alles wat in de bundle zit naar `dist/licenses.md` (`build.license` in `vite.config.ts`).

## Frontend (npm)

Nagelopen in oktober 2026. In de bundle (`dependencies`): MIT en BSD-3-Clause (`hoist-non-react-statics`).

Alleen bij het bouwen (`devDependencies`, niet in de bundle): dezelfde toolchain als WaterZacht (MIT, Apache-2.0, ISC, BSD, BlueOak-1.0.0, CC-BY-4.0 voor `caniuse-lite`, MPL-2.0 voor `lightningcss`).

Geen GPL of AGPL.
