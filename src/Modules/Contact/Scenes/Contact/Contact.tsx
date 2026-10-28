import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, white } from 'src/colors';
import CompanyDetails from 'src/Components/CompanyDetails/CompanyDetails';
import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import { borderRadius, sectionSpacing } from 'src/Theme/sizes';

import ContactForm from './Components/ContactForm';
import ServiceArea from './Components/ServiceArea';

// Links wat je direct kunt doen of weten, rechts het formulier. Op de telefoon: intro, formulier, gegevens.
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: '"intro form" "details form"',
        columnGap: theme.spacing(8),
        rowGap: theme.spacing(6),
        alignItems: 'start',
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            gridTemplateAreas: '"intro" "form" "details"',
            rowGap: theme.spacing(5),
        },
    },
    intro: {
        gridArea: 'intro',
    },
    buttons: {
        marginTop: theme.spacing(4),
        maxWidth: 420,
    },
    panel: {
        gridArea: 'form',
        padding: theme.spacing(5, 6),
        backgroundColor: white,
        border: `1px solid ${border}`,
        borderRadius,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 2.5),
            marginLeft: theme.spacing(-1),
            marginRight: theme.spacing(-1),
        },
    },
    panelTitle: {
        marginBottom: theme.spacing(4),
    },
    details: {
        gridArea: 'details',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5),
        paddingTop: theme.spacing(5),
        borderTop: `1px solid ${border}`,
    },
    detailTitle: {
        marginBottom: theme.spacing(1.5),
    },
}));

export default function Contact() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <div className={classes.intro}>
                <Typography variant="h1">Contact</Typography>
                <ContactButtons layout="stack" className={classes.buttons} />
            </div>

            <section aria-labelledby="form-title" className={classes.panel}>
                <Typography
                    variant="h3"
                    component="h2"
                    id="form-title"
                    className={classes.panelTitle}
                >
                    Stuur een bericht
                </Typography>
                <ContactForm />
            </section>

            <div className={classes.details}>
                <section aria-labelledby="area-title">
                    <Typography
                        variant="h3"
                        component="h2"
                        id="area-title"
                        className={classes.detailTitle}
                    >
                        Werkgebied
                    </Typography>
                    <ServiceArea />
                </section>
                <section aria-labelledby="company-title">
                    <Typography
                        variant="h3"
                        component="h2"
                        id="company-title"
                        className={classes.detailTitle}
                    >
                        Bedrijfsgegevens
                    </Typography>
                    <CompanyDetails />
                </section>
            </div>
        </Container>
    );
}
