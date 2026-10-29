import { Container, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, ink, muted, olive } from 'src/colors';
import {
    companyName,
    email,
    emailHref,
    kvkNumber,
    legalForm,
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
    // Alinea's na de lijst
    after?: string[];
}

// Wat de AVG (art. 13) vraagt voor het contactformulier, het enige formulier op de site.
// Elke zin moet kloppen met wat de site en server/ echt doen: wijzig je daar iets, pas dit dan aan
// (onder meer: geen cookies, geen toegangslog in Caddy, IP max. een uur in de rate limiter,
// Brevo-logs een maand en geen previews). Concept: laten controleren (launch-checklist, "Openstaand").
const sections: Section[] = [
    {
        id: 'wie',
        title: 'Wie is verantwoordelijk',
        paragraphs: [
            `${companyName} ${legalForm} is verantwoordelijk voor wat er met uw gegevens gebeurt als u via deze website contact met mij opneemt. Voor vragen over uw privacy kunt u mij bereiken via:`,
        ],
    },
    {
        id: 'bezoek',
        title: 'Als u de website bezoekt',
        paragraphs: [
            "Deze website plaatst geen cookies en bewaart niets in uw browser. Ik gebruik geen analyse- of advertentiediensten, en de website laadt geen lettertypen, kaarten, video's of andere inhoud van andere partijen.",
            'Zoals bij elke website ontvangt de server uw IP-adres om u de pagina te kunnen sturen. De server houdt geen bezoekerslog bij en bewaart uw IP-adres niet.',
            'Op de website staat een link naar mijn Instagram-pagina. Klikt u daarop, dan gaat u naar Instagram en geldt het privacybeleid van Meta.',
        ],
    },
    {
        id: 'gegevens',
        title: 'Welke gegevens ik verwerk',
        paragraphs: ['Stuurt u mij een bericht via het contactformulier, dan ontvang ik:'],
        list: [
            'uw naam',
            'uw e-mailadres, uw telefoonnummer of allebei (één van beide is genoeg)',
            'uw bericht, met wat u daarin over uzelf of uw woning vertelt',
        ],
        after: [
            'Uw IP-adres gaat ook mee naar de server. Dat gebruik ik alleen om te voorkomen dat iemand het formulier misbruikt door veel berichten achter elkaar te sturen. Het staat niet in het bericht dat ik ontvang.',
            'Belt of mailt u mij rechtstreeks, dan ontvang ik uw telefoonnummer of e-mailadres en wat u mij vertelt of schrijft. Voor die gegevens geldt deze verklaring ook.',
        ],
    },
    {
        id: 'doel',
        title: 'Waarvoor en op welke grond',
        paragraphs: [
            'Ik gebruik uw gegevens alleen om op uw vraag te reageren en, als u dat wilt, een afspraak of offerte met u te maken. Ik gebruik ze niet voor reclame of nieuwsbrieven.',
        ],
        list: [
            'Vraagt u om een offerte of afspraak, dan verwerk ik uw gegevens omdat dat nodig is om op uw verzoek een overeenkomst voor te bereiden (art. 6 lid 1 sub b AVG).',
            'Heeft u een andere vraag, dan verwerk ik uw gegevens omdat ik er belang bij heb uw vraag te beantwoorden (gerechtvaardigd belang, art. 6 lid 1 sub f AVG).',
            'Uw IP-adres verwerk ik om het formulier tegen misbruik te beschermen (gerechtvaardigd belang, art. 6 lid 1 sub f AVG).',
            'Komt er een opdracht, dan moet ik de gegevens voor de offerte en factuur bewaren voor de Belastingdienst (wettelijke plicht, art. 6 lid 1 sub c AVG).',
        ],
        after: [
            'U bent niet verplicht uw gegevens te geven. Zonder uw naam en een e-mailadres of telefoonnummer kan ik alleen niet reageren.',
            'Ik neem geen besluiten over u die alleen door een computer worden genomen.',
        ],
    },
    {
        id: 'bewaren',
        title: 'Hoe lang ik ze bewaar',
        paragraphs: [
            'De website zelf slaat uw bericht niet op. Het formulier stuurt het meteen door als e-mail, die bij mij in de mailbox binnenkomt.',
        ],
        list: [
            'Uw IP-adres houdt de server alleen in zijn werkgeheugen bij, tot uiterlijk een uur na uw laatste bericht.',
            'Brevo, de dienst die de e-mail verstuurt, houdt een registratie van de verzending bij, met onder meer het tijdstip, de e-mailadressen en het onderwerp (daarin staat uw naam). Die verwijdert Brevo na een maand. De inhoud van uw bericht bewaart Brevo niet.',
            'De e-mail in mijn mailbox bewaar ik tot uw vraag is afgehandeld, en daarna niet langer dan nodig is voor eventuele vervolgvragen. Daarna verwijder ik hem.',
            'Komt er een opdracht, dan worden de gegevens die ik voor de offerte en factuur nodig heb onderdeel van mijn administratie. Die moet ik zeven jaar bewaren (fiscale bewaarplicht).',
        ],
    },
    {
        id: 'delen',
        title: 'Wie uw gegevens nog meer zien',
        paragraphs: [
            'Ik verkoop uw gegevens niet en geef ze niet aan anderen voor hun eigen doelen. Voor de techniek werk ik met deze partijen. Zij verwerken uw gegevens alleen in mijn opdracht en mogen er zelf niets anders mee doen:',
        ],
        list: [
            'Brevo (Frankrijk) verstuurt het bericht van het formulier als e-mail naar mij.',
            'TransIP (Nederland) host de server waarop de website en het formulier draaien, en mijn e-mail. Daar komt uw bericht binnen.',
            'Mijn webbouwer beheert de website, de server en de verzending via Brevo.',
        ],
        after: [
            'Deze partijen bewaren uw gegevens in de Europese Unie. Brevo werkt voor een deel van zijn dienst, zoals beveiliging en klantenservice, met eigen leveranciers waarvan sommige buiten de EU zitten. Daarvoor gebruikt Brevo de standaardcontractbepalingen van de Europese Commissie.',
            'Verder geef ik uw gegevens alleen aan anderen als de wet mij daartoe verplicht, bijvoorbeeld aan de Belastingdienst.',
        ],
    },
    {
        id: 'rechten',
        title: 'Uw rechten',
        paragraphs: ['U kunt mij vragen om:'],
        list: [
            'uw gegevens in te zien',
            'onjuiste gegevens te laten verbeteren',
            'uw gegevens te laten verwijderen',
            'de verwerking te laten beperken',
            'uw gegevens in een gangbaar formaat te krijgen of aan een ander te laten geven',
            'bezwaar te maken tegen een verwerking die op mijn gerechtvaardigd belang steunt',
        ],
        after: [
            'Neem daarvoor contact met mij op via de gegevens hierboven. Dat is gratis, en ik reageer binnen een maand. Om zeker te weten dat het verzoek van u komt, kan ik u vragen wie u bent.',
        ],
    },
    {
        id: 'klacht',
        title: 'Een klacht indienen',
        paragraphs: [
            'Bent u het niet eens met hoe ik met uw gegevens omga? Neem dan eerst contact met mij op. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).',
        ],
    },
    {
        id: 'wijzigingen',
        title: 'Wijzigingen',
        paragraphs: [
            'Verandert er iets aan hoe ik met uw gegevens omga, dan pas ik deze verklaring aan. Bovenaan staat wanneer dat voor het laatst is gebeurd.',
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
                    Als u via deze website contact met mij opneemt, verwerk ik uw gegevens.
                    Hieronder leest u welke, waarom, hoe lang en wat uw rechten zijn.
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
                        {section.after?.map(paragraph => (
                            <Typography
                                key={paragraph.slice(0, 24)}
                                variant="body1"
                                className={classes.paragraph}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                        {/* Het adres staat in de footer, op elke pagina (keuze PO, Gesprek-PO.md vraag 1) */}
                        {section.id === 'wie' && (
                            <Typography
                                component="address"
                                variant="body1"
                                className={classes.contact}
                            >
                                {companyName} {legalForm}
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
