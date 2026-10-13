import { Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import { border, muted, olive, white } from 'src/colors';
import SectionHeader from 'src/Components/SectionHeader/SectionHeader';
import { borderRadius, sectionSpacing } from 'src/Theme/sizes';
import { serifFontFamily } from 'src/Theme/typography';

// Werktitels in de volgorde van een klus. TODO: de PO loopt na of elke taak klopt;
// de teksten schrijft hij zelf.
const tasks = [
    {
        title: 'Je vraag beantwoorden',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        title: 'Bij je thuis langskomen',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    },
    {
        title: 'Advies over vloer of raambekleding',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    },
    {
        title: 'Inmeten en de offerte maken',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
        title: 'Leggen of monteren',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
];

const panelPadding = { x: 5, xSmall: 2.5 };

// Een werkbon: wat er bij een klus gebeurt, en wie het doet. Achter elke taak staat "ik".
const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
    },
    inner: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        alignItems: 'start',
        gap: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: 0,
        },
    },
    panel: {
        backgroundColor: white,
        border: `1px solid ${border}`,
        borderRadius,
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(-1),
            marginRight: theme.spacing(-1),
        },
    },
    columns: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2.5, panelPadding.x, 2),
        borderBottom: `1px solid ${border}`,
        color: muted,
        fontSize: '1rem',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, panelPadding.xSmall, 1.5),
        },
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        counterReset: 'task',
    },
    // Nummer, taak, stippellijn, "ik"; de toelichting eronder
    task: {
        display: 'grid',
        gridTemplateColumns: '2.5rem minmax(0, max-content) minmax(32px, 1fr) auto',
        gridTemplateAreas: '"num title leader who" ". text text ."',
        alignItems: 'baseline',
        columnGap: theme.spacing(1.5),
        padding: theme.spacing(3, panelPadding.x),
        counterIncrement: 'task',
        '& + &': {
            borderTop: `1px solid ${border}`,
        },
        '&::before': {
            content: 'counter(task)',
            gridArea: 'num',
            fontFamily: serifFontFamily,
            fontWeight: 500,
            fontSize: '1.75rem',
            fontVariantNumeric: 'oldstyle-nums',
            lineHeight: 1,
            color: olive,
        },
        // Op de telefoon breekt de taak af; dan geen stippellijn, "ik" staat rechts
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1.75rem 1fr auto',
            gridTemplateAreas: '"num title who" ". text text"',
            columnGap: theme.spacing(1.5),
            padding: theme.spacing(2.5, panelPadding.xSmall),
        },
    },
    title: {
        gridArea: 'title',
    },
    // Stippellijn als in een inhoudsopgave; staat op de basislijn van de eerste regel
    leader: {
        gridArea: 'leader',
        height: 4,
        backgroundImage: `radial-gradient(circle, ${alpha(olive, 0.45)} 1.25px, transparent 1.75px)`,
        backgroundSize: '8px 4px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left bottom',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    who: {
        gridArea: 'who',
        fontFamily: serifFontFamily,
        fontWeight: 600,
        fontSize: theme.typography.h3.fontSize,
        lineHeight: theme.typography.h3.lineHeight,
        color: olive,
    },
    text: {
        gridArea: 'text',
        marginTop: theme.spacing(1),
        maxWidth: '48ch',
    },
    // Alleen voor schermlezers
    hidden: {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
        border: 0,
    },
}));

export default function AboutWorkflow() {
    const { classes } = useStyles();

    return (
        <section aria-labelledby="workflow-title" className={classes.root}>
            <Container className={classes.inner}>
                <SectionHeader
                    id="workflow-title"
                    title="Hoe ik werk"
                    lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet."
                />
                <div className={classes.panel}>
                    <div className={classes.columns} aria-hidden>
                        <span>Wat</span>
                        <span>Wie</span>
                    </div>
                    <ol className={classes.list}>
                        {tasks.map(task => (
                            <li key={task.title} className={classes.task}>
                                <Typography variant="h3" className={classes.title}>
                                    {task.title}
                                </Typography>
                                <span className={classes.leader} aria-hidden />
                                <span className={classes.who}>
                                    <span className={classes.hidden}>Wie: </span>ik
                                </span>
                                <Typography variant="body1" className={classes.text}>
                                    {task.text}
                                </Typography>
                            </li>
                        ))}
                    </ol>
                </div>
            </Container>
        </section>
    );
}
