import { Container, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, ink, muted, olive } from 'src/colors';
import type { Service } from 'src/Definitions/Service';
import { projectCountLabel } from 'src/Helpers/projectCountLabel';
import { touchTarget } from 'src/Theme/sizes';

interface IProps {
    groups: { service: Service; count: number }[];
}

// Kop en snelmenu: elke soort is een anker op deze pagina (/projecten#pvc)
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: 'clamp(40px, 6vw, 88px)',
    },
    nav: {
        marginTop: theme.spacing(4),
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: theme.spacing(4),
        margin: 0,
        padding: theme.spacing(0.5, 0),
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            columnGap: theme.spacing(3),
        },
    },
    link: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: theme.spacing(0.75),
        minHeight: touchTarget,
        paddingTop: theme.spacing(1.5),
        color: ink,
        fontSize: '1.0625rem',
        fontWeight: 500,
        '&:hover': {
            color: olive,
        },
    },
    // Alleen de naam is onderstreept, zoals elke link; het aantal staat er los naast
    name: {
        textDecoration: 'underline',
        textUnderlineOffset: '0.2em',
        textDecorationThickness: 1,
        'a:hover > &': {
            textDecorationThickness: 2,
        },
    },
    count: {
        color: muted,
        fontWeight: 400,
        fontVariantNumeric: 'tabular-nums',
    },
}));

export default function ProjectsIntro(props: IProps) {
    const { groups } = props;

    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h1">Projecten</Typography>
            <nav aria-label="Projecten per soort" className={classes.nav}>
                <ul className={classes.list}>
                    {groups.map(({ service, count }) => (
                        <li key={service.id}>
                            <Link
                                href={`#${service.id}`}
                                underline="none"
                                aria-label={`${service.name}, ${projectCountLabel(count).toLowerCase()}`}
                                className={classes.link}
                            >
                                <span className={classes.name}>{service.name}</span>
                                <span className={classes.count}>{count}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Container>
    );
}
