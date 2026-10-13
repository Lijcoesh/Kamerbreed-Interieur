import type { PaletteOptions } from '@mui/material/styles';

import {
    background,
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
    // Oker: knoppen voor bellen, mailen en versturen. Altijd met witte tekst.
    secondary: {
        main: ochre,
        dark: ochreDark,
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
