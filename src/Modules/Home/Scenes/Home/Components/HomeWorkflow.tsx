import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, olive } from 'src/colors';
import SectionHeader from 'src/Components/SectionHeader/SectionHeader';
import { sectionSpacing } from 'src/Theme/sizes';
import { serifFontFamily } from 'src/Theme/typography';

// Werktitels; de PO schrijft de definitieve tekst. De volgorde is de werkwijze zelf.
const steps = [
    {
        title: 'Je belt of mailt',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        title: 'Ik kom bij je thuis',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    },
    {
        title: 'Ik doe het werk zelf',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
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
            <SectionHeader
                id="workflow-title"
                title="Hoe ik werk"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet."
            />
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
