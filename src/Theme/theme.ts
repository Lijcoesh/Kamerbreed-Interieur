import { createTheme } from '@mui/material/styles';

import { overrideMuiButton, overrideMuiIconButton } from './Components/buttons';
import { overrideMuiOutlinedInput } from './Components/inputs';
import { overrideMuiContainer, overrideMuiCssBaseline, overrideMuiLink } from './Components/layout';
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
    MuiIconButton: overrideMuiIconButton(),
    MuiContainer: overrideMuiContainer(theme),
    MuiCssBaseline: overrideMuiCssBaseline(),
    MuiLink: overrideMuiLink(),
    MuiOutlinedInput: overrideMuiOutlinedInput(theme),
};

theme.shadows = overrideShadows();

export default theme;
