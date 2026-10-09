import type { TypographyVariantsOptions } from '@mui/material/styles';

export const sansFontFamily = 'system-ui, -apple-system, "Segoe UI", sans-serif';

const typography: TypographyVariantsOptions = {
    fontFamily: sansFontFamily,
    h1: {
        fontWeight: 600,
        fontSize: 'clamp(36px, 5vw, 64px)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
    },
    h2: {
        fontWeight: 600,
        fontSize: 'clamp(28px, 3.2vw, 44px)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.65,
    },
    button: {
        fontWeight: 600,
        textTransform: 'none',
    },
};

export default typography;
