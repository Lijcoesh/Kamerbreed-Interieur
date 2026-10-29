import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import Photo from 'src/Components/Photo/Photo';
import { slogan } from 'src/Config/company';
import { heroPhoto } from 'src/Config/photos';
import { sectionSpacing } from 'src/Theme/sizes';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        alignItems: 'center',
        gap: theme.spacing(8),
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(5),
        },
    },
    intro: {
        marginTop: theme.spacing(2),
        maxWidth: '52ch',
    },
    actions: {
        marginTop: theme.spacing(4),
        maxWidth: 680,
    },
    personal: {
        marginTop: theme.spacing(2),
    },
    photo: {
        [theme.breakpoints.down('md')]: {
            aspectRatio: '3 / 2',
        },
    },
}));

export default function HomeHero() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="home-title" className={classes.root}>
            <div>
                {/* Tekst 1 op 1 van de PO (28-10-2026) */}
                <Typography variant="h1" id="home-title">
                    {slogan}
                </Typography>
                <Typography variant="body1" className={classes.intro}>
                    Een mooi interieur begint bij de juiste basis. Bij Kamerbreed Interieur draait
                    alles om sfeer, kwaliteit en persoonlijke aandacht. Met bijna 30 jaar ervaring
                    help ik graag bij het vinden van de perfecte vloer en raamdecoratie, passend bij
                    jouw wensen en woonstijl.
                </Typography>
                <Typography variant="body1" className={classes.intro}>
                    Van persoonlijk advies tot vakkundige plaatsing, alles vertrouwd onder één dak.
                </Typography>
                <ContactButtons className={classes.actions} />
            </div>
            <Photo
                photo={heroPhoto}
                ratio="4 / 5"
                label="Projectfoto volgt"
                eager
                className={classes.photo}
            />
        </Container>
    );
}
