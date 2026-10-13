import type { Theme } from '@mui/material/styles';

import { borderRadius, touchTarget } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(): Overrides['MuiButton'] {
    return {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius,
                minHeight: touchTarget,
                transition: 'background-color 160ms ease-out, border-color 160ms ease-out',
            },
            sizeLarge: {
                minHeight: 56,
                paddingLeft: 24,
                paddingRight: 24,
            },
        },
    };
}

export function overrideMuiIconButton(): Overrides['MuiIconButton'] {
    return {
        styleOverrides: {
            root: {
                width: touchTarget,
                height: touchTarget,
                borderRadius,
            },
        },
    };
}
