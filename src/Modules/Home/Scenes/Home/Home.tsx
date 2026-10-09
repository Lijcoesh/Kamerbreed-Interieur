import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { sectionSpacing } from 'src/Theme/sizes';

const useStyles = makeStyles()({
    root: {
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
    },
});

export default function Home() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h1">Kamerbreed Interieur</Typography>
        </Container>
    );
}
