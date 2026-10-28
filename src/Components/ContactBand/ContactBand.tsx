import { Button, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { olive, onOlive, white } from 'src/colors';
import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import ArrowForwardIcon from 'src/Components/Icons/ArrowForwardIcon';
import { sectionSpacing } from 'src/Theme/sizes';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: olive,
        color: onOlive,
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
        // Logoblauw haalt op olijf geen 3:1; hier wordt de focusrand wit
        '& .MuiButtonBase-root.Mui-focusVisible': {
            outlineColor: white,
        },
    },
    inner: {
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        alignItems: 'center',
        gap: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(4),
        },
    },
    title: {
        color: onOlive,
    },
    // Alle acties bij elkaar: bellen en mailen bovenaan, het formulier eronder over de volle breedte
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.5),
    },
    // Outlined zoals "Meer over mij", maar in de lichte kleur van de band
    formLink: {
        color: onOlive,
        borderColor: alpha(onOlive, 0.7),
        '&:hover': {
            borderColor: onOlive,
            backgroundColor: alpha(onOlive, 0.08),
        },
    },
}));

export default function ContactBand() {
    const { classes } = useStyles();

    return (
        <section aria-labelledby="contact-title" className={classes.root}>
            <Container className={classes.inner}>
                {/* Bewust zonder tekst eronder (PO, 28-10-2026) */}
                <Typography variant="h2" id="contact-title" className={classes.title}>
                    Neem contact op
                </Typography>
                <div className={classes.actions}>
                    <ContactButtons />
                    <Button
                        component={RouterLink}
                        to="/contact"
                        variant="outlined"
                        size="large"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className={classes.formLink}
                    >
                        Of stuur een bericht
                    </Button>
                </div>
            </Container>
        </section>
    );
}
