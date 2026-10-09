import type { PaletteOptions } from '@mui/material/styles';

import {
    accent,
    background,
    border,
    error,
    ink,
    muted,
    primary,
    primaryDark,
    white,
} from 'src/colors';

const palette: PaletteOptions = {
    primary: {
        main: primary,
        dark: primaryDark,
        contrastText: white,
    },
    secondary: {
        main: accent,
        contrastText: white,
    },
    error: { main: error },
    background: {
        default: background,
        paper: white,
    },
    text: {
        primary: ink,
        secondary: muted,
    },
    divider: border,
};

export default palette;
