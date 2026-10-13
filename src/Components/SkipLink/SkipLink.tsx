import { makeStyles } from 'tss-react/mui';

import { logoBlue, ochre, white } from 'src/colors';
import { borderRadius } from 'src/Theme/sizes';

// Onzichtbaar tot hij toetsenbordfocus krijgt; springt naar <main id="main">
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'absolute',
        top: theme.spacing(1),
        left: theme.spacing(1),
        zIndex: theme.zIndex.tooltip,
        padding: theme.spacing(1.5, 2.5),
        borderRadius,
        backgroundColor: ochre,
        color: white,
        fontWeight: 600,
        textDecoration: 'none',
        transform: 'translateY(-200%)',
        '&:focus-visible': {
            transform: 'none',
            outline: `2px solid ${logoBlue}`,
            outlineOffset: 2,
        },
    },
}));

export default function SkipLink() {
    const { classes } = useStyles();

    return (
        <a href="#main" className={classes.root}>
            Naar de inhoud
        </a>
    );
}
