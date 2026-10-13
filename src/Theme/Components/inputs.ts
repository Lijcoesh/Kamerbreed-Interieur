import type { Theme } from '@mui/material/styles';

import { error, ink, inputBorder, logoBlue, olive, white } from 'src/colors';
import { borderRadius, touchTarget } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

// Witte velden met een rand die 3:1 haalt; focus is een olijf rand van 2px, een fout een rode
export function overrideMuiOutlinedInput(theme: Theme): Overrides['MuiOutlinedInput'] {
    return {
        styleOverrides: {
            root: {
                backgroundColor: white,
                borderRadius,
                fontSize: '1.125rem',
                color: ink,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: inputBorder,
                    transition: 'border-color 160ms ease-out',
                },
                '&:hover:not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                    borderColor: ink,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: olive,
                    borderWidth: 2,
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: error,
                    borderWidth: 2,
                },
                // Een fout veld met focus houdt zijn rode rand; de focus wordt de gewone focusrand eromheen
                '&.Mui-focused.Mui-error': {
                    outline: `2px solid ${logoBlue}`,
                    outlineOffset: 2,
                },
            },
            // Padding op het veld zelf; bij multiline niet ook nog op de wrapper
            input: {
                minHeight: touchTarget - 2 * 12,
                padding: theme.spacing(1.5, 1.75),
                // Bij focus (bv. naar het eerste foute veld) blijft het label erboven onder de appbar zichtbaar
                scrollMarginTop: theme.spacing(7),
                // Automatisch invullen door de browser: wit veld met gewone tekst in plaats van blauw
                '&:-webkit-autofill': {
                    WebkitBoxShadow: `0 0 0 100px ${white} inset`,
                    WebkitTextFillColor: ink,
                    caretColor: ink,
                },
            },
            multiline: {
                padding: 0,
            },
        },
    };
}
