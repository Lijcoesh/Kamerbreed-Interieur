import type { PhotoSource } from 'src/Definitions/PhotoSource';
import heroSrc from 'src/Resources/Photos/home.jpg';

// Grote foto naast de kop op Home. Van de PO ("1ste foto", 28-10-2026).
export const heroPhoto: PhotoSource | undefined = {
    src: heroSrc,
    alt: 'Lange woonkamer met een lichte houten vloer, een hoekbank en een groot vloerkleed',
};

// Foto van de eigenaar op Home en Over mij. Tot de PO er een stuurt: de placeholder.
export const ownerPhoto: PhotoSource | undefined = undefined;
