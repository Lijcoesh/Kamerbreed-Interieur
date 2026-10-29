import { Container, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, ink, muted, olive } from 'src/colors';
import {
    companyName,
    email,
    emailHref,
    kvkNumber,
    phoneDisplay,
    phoneHref,
} from 'src/Config/company';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';
import { headerHeight, sectionSpacing, touchTarget } from 'src/Theme/sizes';

interface Section {
    id: string;
    title: string;
    paragraphs: string[];
    list?: string[];
}

// Alleen wat de AVG (art. 13) vraagt voor het contactformulier, het enige formulier op de site.
// Concept: de bewaartermijn en de verwerkersovereenkomsten laat de PO bevestigen (launch-checklist, "Openstaand").
const sections: Section[] = [
    {
        id: 'wie',
        title: 'Wie is verantwoordelijk',
        paragraphs: [
            `${companyName} is verantwoordelijk voor de verwerking van uw gegevens via deze website. Voor vragen over uw privacy kunt u mij bereiken via:`,
        ],
    },
    {
        id: 'gegevens',
        title: 'Welke gegevens ik verwerk',
        paragraphs: [
            'Het contactformulier is het enige formulier op deze website. Wat u daarin invult, ontvang ik:',
            'Deze website plaatst geen cookies, gebruikt geen analyse- of advertentiediensten en laadt geen lettertypen of andere inhoud van derden.',
        ],
        list: [
            'uw naam',
            'uw e-mailadres of telefoonnummer (één van beide is genoeg)',
            'uw bericht',
        ],
    },
    {
        id: 'doel',
        title: 'Waarvoor en op welke grond',
        paragraphs: [
            'Ik gebruik uw gegevens alleen om te reageren op uw bericht en, als u dat wilt, een afspraak of offerte voor te bereiden. Ik gebruik ze niet voor reclame of nieuwsbrieven.',
            'De grond is dat u zelf contact met mij opneemt: ik verwerk uw gegevens om uw verzoek te beantwoorden (art. 6 lid 1 sub b AVG).',
        ],
    },
    {
        id: 'bewaren',
        title: 'Hoe lang ik ze bewaar',
        paragraphs: [
            'De website slaat uw bericht niet op. Het formulier stuurt het door als e-mail, die bij mij in de mailbox terechtkomt.',
            'Is uw vraag afgehandeld en volgt er geen opdracht, dan bewaar ik die e-mail niet langer dan nodig is om uw vraag af te handelen.',
            'Volgt er wel een opdracht, dan vallen de gegevens die ik daarvoor nodig heb onder mijn administratie. Die bewaar ik zo lang als de wet vereist (zeven jaar).',
        ],
    },
    {
        id: 'delen',
        title: 'Met wie ik ze deel',
        paragraphs: [
            'Ik verkoop uw gegevens niet en geef ze niet door voor andere doelen. Voor de techniek schakel ik twee partijen in, die uw gegevens alleen in mijn opdracht verwerken:',
        ],
        list: [
            'Brevo (Frankrijk) verstuurt het bericht van het formulier naar mijn e-mail.',
            'TransIP (Nederland) host de server waarop de website en het formulier draaien.',
        ],
    },
    {
        id: 'rechten',
        title: 'Uw rechten',
        paragraphs: [
            'Neem contact met mij op via de gegevens hierboven; ik reageer binnen een maand. U heeft het recht om:',
        ],
        list: [
            'uw gegevens in te zien',
            'onjuiste gegevens te laten corrigeren',
            'uw gegevens te laten verwijderen',
            'de verwerking te laten beperken',
            'uw gegevens in een gangbaar formaat mee te nemen',
        ],
    },
    {
        id: 'klacht',
        title: 'Een klacht indienen',
        paragraphs: [
            'Bent u het niet eens met hoe ik met uw gegevens omga? Neem dan eerst contact met mij op. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).',
        ],
    },
];

// Eén leeskolom; op desktop links een inhoudsopgave die meeloopt
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        gridTemplateAreas: '"intro intro" "toc content"',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gridTemplateAreas: '"intro" "toc" "content"',
        },
    },
    intro: {
        gridArea: 'intro',
        paddingBottom: theme.spacing(5),
        marginBottom: theme.spacing(5),
        borderBottom: `1px solid ${border}`,
    },
    lead: {
        marginTop: theme.spacing(2),
        maxWidth: '62ch',
    },
    note: {
        marginTop: theme.spacing(2),
    },
    toc: {
        gridArea: 'toc',
        position: 'sticky',
        top: headerHeight + 32,
        [theme.breakpoints.down('md')]: {
            position: 'static',
            marginBottom: theme.spacing(5),
            paddingBottom: theme.spacing(4),
            borderBottom: `1px solid ${border}`,
        },
    },
    tocTitle: {
        marginBottom: theme.spacing(1),
        color: muted,
        fontSize: '1rem',
        fontWeight: 600,
    },
    tocList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    tocLink: {
        display: 'flex',
        alignItems: 'center',
        minHeight: touchTarget,
        color: ink,
        fontSize: '1.0625rem',
        '&:hover': {
            color: olive,
        },
    },
    content: {
        gridArea: 'content',
        maxWidth: '65ch',
    },
    section: {
        '& + &': {
            marginTop: theme.spacing(6),
        },
    },
    paragraph: {
        marginTop: theme.spacing(1.5),
    },
    list: {
        margin: theme.spacing(1.5, 0, 0),
        paddingLeft: '1.25em',
        '& li': {
            marginTop: theme.spacing(0.5),
        },
        '& li::marker': {
            color: olive,
        },
    },
    contact: {
        marginTop: theme.spacing(1.5),
        fontStyle: 'normal',
        lineHeight: 1.7,
    },
}));

export default function Privacy() {
    const { classes } = useStyles();

    useDocumentTitle('Privacyverklaring | Kamerbreed Interieur');

    return (
        <Container className={classes.root}>
            <div className={classes.intro}>
                <Typography variant="h1">Privacyverklaring</Typography>
                <Typography variant="body1" className={classes.lead}>
                    Als u mij via het contactformulier een bericht stuurt, verwerk ik uw gegevens.
                    Hieronder leest u welke, waarom en hoe lang.
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.note}>
                    Laatst bijgewerkt: 29 oktober 2026.
                </Typography>
            </div>

            <nav aria-labelledby="toc-title" className={classes.toc}>
                <h2 id="toc-title" className={classes.tocTitle}>
                    Op deze pagina
                </h2>
                <ol className={classes.tocList}>
                    {sections.map(section => (
                        <li key={section.id}>
                            <Link href={`#${section.id}`} className={classes.tocLink}>
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className={classes.content}>
                {sections.map(section => (
                    <section
                        key={section.id}
                        id={section.id}
                        aria-labelledby={`${section.id}-title`}
                        className={classes.section}
                    >
                        <Typography variant="h3" component="h2" id={`${section.id}-title`}>
                            {section.title}
                        </Typography>
                        {section.paragraphs.map(paragraph => (
                            <Typography
                                key={paragraph.slice(0, 24)}
                                variant="body1"
                                className={classes.paragraph}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                        {section.list && (
                            <Typography component="ul" variant="body1" className={classes.list}>
                                {section.list.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </Typography>
                        )}
                        {/* Contactgegevens zijn echt; het adres volgt zodra de PO beslist (Gesprek-PO.md, vraag 1) */}
                        {section.id === 'wie' && (
                            <Typography
                                component="address"
                                variant="body1"
                                className={classes.contact}
                            >
                                {companyName}
                                <br />
                                <Link href={phoneHref}>{phoneDisplay}</Link>
                                <br />
                                <Link href={emailHref}>{email}</Link>
                                <br />
                                KvK {kvkNumber}
                            </Typography>
                        )}
                    </section>
                ))}
            </div>
        </Container>
    );
}
