import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import ArrowForwardIcon from 'src/Components/Icons/ArrowForwardIcon';
import Photo from 'src/Components/Photo/Photo';
import { ownerName } from 'src/Config/company';
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
            {/* TODO: foto van de eigenaar als hij die wil (src/Config/photos.ts, Gesprek-PO.md, vraag 6) */}
            <Photo photo={ownerPhoto} ratio="4 / 5" className={classes.photo} />
            <div>
                <Typography variant="h2" id="about-title">
                    Over mij
                </Typography>
                {/* De eerste alinea van de tekst van de PO op Over mij */}
                <Typography variant="body1" className={classes.text}>
                    Mijn naam is {ownerName}. Ik ben geboren en getogen in het Westland en inmiddels
                    al bijna 30 jaar met veel plezier werkzaam in de woninginrichting.
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
