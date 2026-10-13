import type { PaletteOptions } from '@mui/material/styles';

import {
    background,
    black,
    border,
    error,
    ink,
    muted,
    ochre,
    ochreDark,
    olive,
    oliveDark,
    onOlive,
    white,
} from 'src/colors';

const palette: PaletteOptions = {
    primary: {
        main: olive,
        dark: oliveDark,
        contrastText: onOlive,
    },
    // Oker: knoppen voor bellen en mailen. Altijd met donkere tekst.
    secondary: {
        main: ochre,
        dark: ochreDark,
        contrastText: black,
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
