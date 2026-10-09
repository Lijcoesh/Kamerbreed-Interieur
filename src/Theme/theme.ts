import { createTheme } from '@mui/material/styles';

import { overrideMuiButton } from './Components/buttons';
import { overrideMuiContainer, overrideMuiCssBaseline } from './Components/layout';
import palette from './palette';
import overrideShadows from './shadow';
import { borderRadius } from './sizes';
import typography from './typography';

const theme = createTheme({
    palette,
    typography,
    shape: {
        borderRadius,
    },
});

theme.components = {
    MuiButton: overrideMuiButton(),
    MuiContainer: overrideMuiContainer(theme),
    MuiCssBaseline: overrideMuiCssBaseline(),
};

theme.shadows = overrideShadows();

export default theme;
