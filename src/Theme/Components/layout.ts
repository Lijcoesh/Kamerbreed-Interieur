import type { Theme } from '@mui/material/styles';

import { accent } from 'src/colors';
import { contentMaxWidth, pageGutter, pageGutterSmall } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiCssBaseline(): Overrides['MuiCssBaseline'] {
    return {
        styleOverrides: {
            body: {
                WebkitFontSmoothing: 'antialiased',
                textWrap: 'pretty',
            },
            'html:focus-within': {
                scrollBehavior: 'smooth',
            },
            '@media (prefers-reduced-motion: reduce)': {
                'html:focus-within': {
                    scrollBehavior: 'auto',
                },
            },
            // MUI-knoppen tonen bij toetsenbordfocus alleen een vage ripple
            '.MuiButtonBase-root.Mui-focusVisible': {
                outline: `2px solid ${accent}`,
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
