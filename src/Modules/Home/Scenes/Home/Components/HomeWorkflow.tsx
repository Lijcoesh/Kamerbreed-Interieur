import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, olive } from 'src/colors';
import SectionHeader from 'src/Components/SectionHeader/SectionHeader';
import { sectionSpacing } from 'src/Theme/sizes';
import { serifFontFamily } from 'src/Theme/typography';

// Tekst 1 op 1 van de PO (28-10-2026). De volgorde is de werkwijze zelf.
const steps = [
    {
        title: 'U belt of mailt',
        text: 'Tijdens het eerste gesprek bespreken we wat uw wensen zijn en de eventuele mogelijkheden.',
    },
    {
        title: 'Ik kom bij u thuis',
        text: 'Ik heb geen fysieke winkel maar kom met stalen bij u thuis, zodat u het al op uw eigen vloer en in het juiste licht kunt zien.',
    },
    {
        title: 'Alles in eigen beheer',
        text: 'Van het eerste adviesgesprek en de offerte tot het leveren en vakkundig plaatsen: ik verzorg alles persoonlijk. Zo heb je van begin tot eind één vertrouwd aanspreekpunt.',
    },
];

const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
    },
    steps: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing(4),
        margin: 0,
        padding: 0,
        listStyle: 'none',
        counterReset: 'step',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: 0,
        },
    },
    step: {
        paddingTop: theme.spacing(3),
        borderTop: `1px solid ${border}`,
        counterIncrement: 'step',
        '&::before': {
            content: 'counter(step)',
            display: 'block',
            marginBottom: theme.spacing(1.5),
            fontFamily: serifFontFamily,
            fontWeight: 500,
            fontSize: '2.25rem',
            fontVariantNumeric: 'oldstyle-nums',
            lineHeight: 1,
            color: olive,
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(4),
        },
    },
    title: {
        color: olive,
    },
    text: {
        marginTop: theme.spacing(1),
        maxWidth: '40ch',
    },
}));

export default function HomeWorkflow() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="workflow-title" className={classes.root}>
            <SectionHeader id="workflow-title" title="Werkwijze" />
            <ol className={classes.steps}>
                {steps.map(step => (
                    <li key={step.title} className={classes.step}>
                        <Typography variant="h3" className={classes.title}>
                            {step.title}
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            {step.text}
                        </Typography>
                    </li>
                ))}
            </ol>
        </Container>
    );
}
