import { Container, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, ink, muted, olive } from 'src/colors';
import { companyName, email, emailHref, phoneDisplay, phoneHref } from 'src/Config/company';
import { headerHeight, sectionSpacing, touchTarget } from 'src/Theme/sizes';

// TODO: lorem ipsum onder de koppen van een privacyverklaring volgens de AVG, als voorbeeld voor de PO.
// De echte tekst kan pas als adres, rechtsvorm, hostingpartij en bewaartermijnen bekend zijn
// (launch-checklist, "Openstaand"); laat die door de PO of een jurist controleren.
interface Section {
    id: string;
    title: string;
    paragraphs: string[];
    list?: string[];
}

const sections: Section[] = [
    {
        id: 'wie',
        title: 'Wie is verantwoordelijk',
        paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ],
    },
    {
        id: 'gegevens',
        title: 'Welke gegevens ik verwerk',
        paragraphs: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident:',
        ],
        list: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor incididunt',
            'Ut labore et dolore magna aliqua',
        ],
    },
    {
        id: 'doel',
        title: 'Waarvoor ik ze gebruik',
        paragraphs: [
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        ],
    },
    {
        id: 'grondslag',
        title: 'Op welke grond',
        paragraphs: [
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        ],
    },
    {
        id: 'bewaren',
        title: 'Hoe lang ik ze bewaar',
        paragraphs: [
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        ],
        list: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Sed do eiusmod tempor incididunt ut labore',
            'Ut enim ad minim veniam, quis nostrud exercitation',
        ],
    },
    {
        id: 'delen',
        title: 'Met wie ik ze deel',
        paragraphs: [
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        ],
    },
    {
        id: 'cookies',
        title: 'Cookies',
        paragraphs: [
            'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        ],
    },
    {
        id: 'beveiliging',
        title: 'Beveiliging',
        paragraphs: [
            'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
        ],
    },
    {
        id: 'rechten',
        title: 'Jouw rechten',
        paragraphs: [
            'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
        ],
        list: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit sed do',
            'Eiusmod tempor incididunt ut labore',
            'Et dolore magna aliqua ut enim',
            'Ad minim veniam quis nostrud',
        ],
    },
    {
        id: 'klacht',
        title: 'Een klacht indienen',
        paragraphs: [
            'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
    },
    {
        id: 'wijzigingen',
        title: 'Wijzigingen',
        paragraphs: [
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
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

    return (
        <Container className={classes.root}>
            <div className={classes.intro}>
                <Typography variant="h1">Privacyverklaring</Typography>
                <Typography variant="body1" className={classes.lead}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris.
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.note}>
                    Concept. Laatst bijgewerkt: datum volgt.
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
                            </Typography>
                        )}
                    </section>
                ))}
            </div>
        </Container>
    );
}
