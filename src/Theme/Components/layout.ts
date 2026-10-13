import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

import { black, logoBlue, ochre, olive } from 'src/colors';
import { fontFaces } from 'src/Theme/fonts';
import { contentMaxWidth, headerHeight, pageGutter, pageGutterSmall } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiCssBaseline(): Overrides['MuiCssBaseline'] {
    return {
        styleOverrides: {
            '@font-face': fontFaces,
            html: {
                // Ankers en skip-link landen niet onder de sticky appbar
                scrollPaddingTop: headerHeight,
            },
            body: {
                WebkitFontSmoothing: 'antialiased',
                textWrap: 'pretty',
                caretColor: olive,
            },
            '::selection': {
                backgroundColor: alpha(ochre, 0.45),
                color: black,
            },
            'html:focus-within': {
                scrollBehavior: 'smooth',
            },
            '@media (prefers-reduced-motion: reduce)': {
                'html:focus-within': {
                    scrollBehavior: 'auto',
                },
            },
            // MUI-knoppen tonen bij toetsenbordfocus alleen een vage ripple.
            // Logoblauw haalt 3:1 op wit en op de achtergrond; op olijf zet de band hem op wit.
            '.MuiButtonBase-root.Mui-focusVisible': {
                outline: `2px solid ${logoBlue}`,
                outlineOffset: 2,
            },
        },
    };
}

// Eén inhoudsbreedte voor de hele site: contentMaxWidth + gutters.
export function overrideMuiContainer(theme: Theme): Overrides['MuiContainer'] {
    return {
        defaultProps: {
            maxWidth: false,
        },
        styleOverrides: {
            root: {
                maxWidth: contentMaxWidth + 2 * pageGutter,
                paddingLeft: pageGutter,
                paddingRight: pageGutter,
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: pageGutterSmall,
                    paddingRight: pageGutterSmall,
                },
            },
        },
    };
}

export function overrideMuiLink(): Overrides['MuiLink'] {
    return {
        defaultProps: {
            underline: 'always',
            color: 'inherit',
        },
        styleOverrides: {
            root: {
                textUnderlineOffset: '0.2em',
                textDecorationThickness: 1,
                textDecorationColor: 'currentColor',
                '&:hover': {
                    textDecorationThickness: 2,
                },
                '&:focus-visible': {
                    outline: `2px solid ${logoBlue}`,
                    outlineOffset: 2,
                    borderRadius: 2,
                },
            },
        },
    };
}
