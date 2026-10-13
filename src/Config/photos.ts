import type { PhotoSource } from 'src/Definitions/PhotoSource';
import heroSrc from 'src/Resources/Photos/Temp/hero.jpg';
import ownerSrc from 'src/Resources/Photos/Temp/eigenaar.jpg';

// TODO: tijdelijke stockfoto's (CC0, zie src/Resources/README.md) voor het eerste voorbeeld-design.
// Vóór livegang vervangen door werk en een foto van de PO, of terugzetten naar undefined (placeholder).

// Grote foto naast de kop op Home
export const heroPhoto: PhotoSource | undefined = {
    src: heroSrc,
    alt: 'Lichte woonruimte met een houten vloer, een eettafel en een vloerkleed',
};

// Foto van de eigenaar op Home en Over mij. Bewust geen gezicht: dit is niet de PO.
export const ownerPhoto: PhotoSource | undefined = {
    src: ownerSrc,
    alt: 'Vakman in een werkschort met gereedschap in de borstzak',
};
