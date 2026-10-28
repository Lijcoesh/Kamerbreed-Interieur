import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import Photo from 'src/Components/Photo/Photo';
import { ownerName } from 'src/Config/company';
import { ownerPhoto } from 'src/Config/photos';
import { headerHeight, headerHeightSmall, sectionSpacing } from 'src/Theme/sizes';

// Portret links, tekst rechts. Op de telefoon eerst tekst en knoppen, dan het portret.
// Vult het scherm onder de appbar, zodat de footer bij openen niet al in beeld staat.
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        gridTemplateAreas: '"photo text"',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: `calc(100dvh - ${headerHeight}px)`,
        gap: theme.spacing(8),
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gridTemplateAreas: '"text" "photo"',
            gap: theme.spacing(5),
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100dvh - ${headerHeightSmall}px)`,
        },
    },
    photo: {
        gridArea: 'photo',
        [theme.breakpoints.down('md')]: {
            maxWidth: 420,
        },
    },
    text: {
        gridArea: 'text',
    },
    body: {
        marginTop: theme.spacing(2),
        maxWidth: '56ch',
    },
    actions: {
        marginTop: theme.spacing(4),
        maxWidth: 680,
    },
}));

export default function AboutIntro() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="about-title" className={classes.root}>
            <div className={classes.text}>
                <Typography variant="h1" id="about-title">
                    Over mij
                </Typography>
                {/* Tekst 1 op 1 van de PO (28-10-2026) */}
                <Typography variant="body1" className={classes.body}>
                    Mijn naam is {ownerName}. Ik ben geboren en getogen in het Westland en inmiddels
                    al bijna 30 jaar met veel plezier werkzaam in de woninginrichting.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    De liefde voor het vak is mij met de paplepel ingegoten. Zowel mijn opa als mijn
                    vader waren actief in de woninginrichting. Je kunt dus wel zeggen dat het
                    vakmanschap al drie generaties in de familie zit.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    Wat ooit begon als een vertrouwde wereld waarin in opgroeide, is uitgegroeid tot
                    mijn passie.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    Met mijn jarenlange ervaring, oog voor detail en persoonlijke aanpak help ik
                    klanten graag bij het creëren van een mooi en sfeervol thuis.
                </Typography>
                <ContactButtons className={classes.actions} />
            </div>
            {/* TODO: foto van de eigenaar als hij die wil (src/Config/photos.ts, Gesprek-PO.md, vraag 6) */}
            <Photo photo={ownerPhoto} ratio="4 / 5" eager className={classes.photo} />
        </Container>
    );
}
