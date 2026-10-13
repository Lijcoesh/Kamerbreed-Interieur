import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import ArrowForwardIcon from 'src/Components/Icons/ArrowForwardIcon';
import Photo from 'src/Components/Photo/Photo';
import { ownerPhoto } from 'src/Config/photos';
import { sectionSpacing } from 'src/Theme/sizes';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        alignItems: 'center',
        gap: theme.spacing(8),
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(4),
        },
    },
    photo: {
        maxWidth: 420,
    },
    text: {
        marginTop: theme.spacing(2),
        maxWidth: '58ch',
    },
    more: {
        marginTop: theme.spacing(4),
    },
}));

export default function HomeAbout() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="about-title" className={classes.root}>
            {/* TODO: nu een tijdelijke stockfoto (src/Config/photos.ts); foto van de eigenaar als hij die wil (Gesprek-PO.md, vraag 6) */}
            <Photo photo={ownerPhoto} ratio="4 / 5" className={classes.photo} />
            <div>
                <Typography variant="h2" id="about-title">
                    Over mij
                </Typography>
                <Typography variant="body1" className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.text}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Typography>
                <Button
                    component={RouterLink}
                    to="/over-mij"
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    className={classes.more}
                >
                    Meer over mij
                </Button>
            </div>
        </Container>
    );
}
