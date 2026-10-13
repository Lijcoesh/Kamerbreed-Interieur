import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { olive, onOlive, onOliveMuted, white } from 'src/colors';
import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
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
        alignItems: 'end',
        gap: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(4),
        },
    },
    title: {
        color: onOlive,
    },
    lead: {
        marginTop: theme.spacing(2),
        color: onOliveMuted,
        maxWidth: '46ch',
    },
}));

export default function HomeContact() {
    const { classes } = useStyles();

    return (
        <section aria-labelledby="contact-title" className={classes.root}>
            <Container className={classes.inner}>
                <div>
                    <Typography variant="h2" id="contact-title" className={classes.title}>
                        Neem contact op
                    </Typography>
                    <Typography variant="body1" className={classes.lead}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore.
                    </Typography>
                </div>
                <ContactButtons />
            </Container>
        </section>
    );
}
