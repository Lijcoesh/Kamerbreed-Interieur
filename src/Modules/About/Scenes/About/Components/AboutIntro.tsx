import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import Photo from 'src/Components/Photo/Photo';
import { ownerName } from 'src/Config/company';
import { ownerPhoto } from 'src/Config/photos';
import { sectionSpacing } from 'src/Theme/sizes';

// Portret links, tekst rechts. Op de telefoon eerst tekst en knoppen, dan het portret.
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        gridTemplateAreas: '"photo text"',
        alignItems: 'center',
        gap: theme.spacing(8),
        // Krapper dan op andere pagina's, zodat "Hoe ik werk" op desktop nog in het eerste scherm valt
        paddingTop: 56,
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            paddingTop: 'clamp(40px, 6vw, 88px)',
            paddingBottom: sectionSpacing,
            gridTemplateColumns: '1fr',
            gridTemplateAreas: '"text" "photo"',
            gap: theme.spacing(5),
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
    lead: {
        marginTop: theme.spacing(2.5),
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
                {/* Werktitel; de PO schrijft de definitieve tekst */}
                <Typography variant="subtitle1" component="p" className={classes.lead}>
                    Ik ben {ownerName}. Kamerbreed Interieur, dat ben ik.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </Typography>
                <ContactButtons className={classes.actions} />
            </div>
            {/* TODO: nu een tijdelijke stockfoto (src/Config/photos.ts); foto van de eigenaar als hij die wil (Gesprek-PO.md, vraag 6) */}
            <Photo photo={ownerPhoto} ratio="4 / 5" eager className={classes.photo} />
        </Container>
    );
}
