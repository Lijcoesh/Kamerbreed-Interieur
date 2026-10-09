import type { Theme } from '@mui/material/styles';

import { borderRadius } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(): Overrides['MuiButton'] {
    return {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius,
            },
        },
    };
}
