import type { TypographyVariantsOptions } from '@mui/material/styles';

import { olive } from 'src/colors';

// Zelf gehost via src/Theme/fonts.ts (OFL, zie src/Resources/Fonts)
export const sansFontFamily = '"Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif';
export const serifFontFamily = '"Source Serif 4", Georgia, "Times New Roman", serif';

const heading = {
    fontFamily: serifFontFamily,
    fontWeight: 600,
    color: olive,
    textWrap: 'balance',
} as const;

// Royale maten: de doelgroep is waarschijnlijk deels ouder (PRODUCT.md)
const typography: TypographyVariantsOptions = {
    fontFamily: sansFontFamily,
    h1: {
        ...heading,
        fontSize: 'clamp(2.4rem, 1.7rem + 2.6vw, 3.75rem)',
        lineHeight: 1.08,
        letterSpacing: '-0.015em',
    },
    h2: {
        ...heading,
        fontSize: 'clamp(1.9rem, 1.5rem + 1.5vw, 2.6rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
    },
    h3: {
        ...heading,
        fontSize: '1.375rem',
        lineHeight: 1.25,
    },
    subtitle1: {
        fontSize: 'clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)',
        lineHeight: 1.4,
        fontWeight: 500,
        color: olive,
    },
    body1: {
        fontSize: '1.125rem',
        lineHeight: 1.6,
    },
    body2: {
        fontSize: '1rem',
        lineHeight: 1.55,
    },
    button: {
        fontSize: '1.0625rem',
        fontWeight: 600,
        textTransform: 'none',
        letterSpacing: 0,
    },
};

export default typography;
