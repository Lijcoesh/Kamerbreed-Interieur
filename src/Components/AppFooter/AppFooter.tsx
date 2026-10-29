import { Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { border, ink, muted, olive, white } from 'src/colors';
import BrandLockup from 'src/Components/BrandLockup/BrandLockup';
import CompanyDetails from 'src/Components/CompanyDetails/CompanyDetails';
import InstagramIcon from 'src/Components/Icons/InstagramIcon';
import MailIcon from 'src/Components/Icons/MailIcon';
import PhoneIcon from 'src/Components/Icons/PhoneIcon';
import {
    companyName,
    email,
    emailHref,
    instagramUrl,
    phoneDisplay,
    phoneHref,
    region,
    slogan,
} from 'src/Config/company';
import { navItems } from 'src/Config/navigation';
import { touchTarget } from 'src/Theme/sizes';
import { serifFontFamily } from 'src/Theme/typography';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: white,
        borderTop: `1px solid ${border}`,
        color: ink,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),
    },
    grid: {
        display: 'grid',
        gap: theme.spacing(5, 4),
        gridTemplateColumns: '1.5fr 1fr 0.8fr 1fr',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr 1fr',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },
    },
    brand: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            gridColumn: '1 / -1',
        },
    },
    slogan: {
        margin: 0,
        color: muted,
        maxWidth: '32ch',
    },
    heading: {
        margin: theme.spacing(0, 0, 1.5),
        fontFamily: serifFontFamily,
        fontWeight: 600,
        fontSize: '1.125rem',
        color: olive,
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.25),
        minHeight: 40,
        fontSize: '1rem',
        '& svg': {
            fontSize: '1.15rem',
            color: olive,
        },
    },
    // De footer houdt de kleinere stap van de andere footerkolommen
    companyDetails: {
        fontSize: '1rem',
        lineHeight: 1.8,
    },
    pending: {
        color: muted,
    },
    // Copyright links, privacyverklaring rechts; op de telefoon onder elkaar
    bottom: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: theme.spacing(3),
        marginTop: theme.spacing(7),
        paddingTop: theme.spacing(2),
        borderTop: `1px solid ${border}`,
        color: muted,
        fontSize: '1rem',
    },
    bottomLink: {
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: touchTarget,
        color: ink,
    },
}));

export default function AppFooter() {
    const { classes } = useStyles();

    return (
        <footer className={classes.root}>
            <Container>
                <div className={classes.grid}>
                    <div className={classes.brand}>
                        <BrandLockup />
                        <p className={classes.slogan}>
                            {slogan} Vloeren en binnenzonwering in het {region}.
                        </p>
                    </div>

                    <div>
                        <h2 className={classes.heading}>Contact</h2>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                <PhoneIcon />
                                <Link href={phoneHref}>{phoneDisplay}</Link>
                            </li>
                            <li className={classes.item}>
                                <MailIcon />
                                <Link href={emailHref}>{email}</Link>
                            </li>
                            <li className={classes.item}>
                                <InstagramIcon />
                                {instagramUrl ? (
                                    <Link href={instagramUrl}>Instagram</Link>
                                ) : (
                                    // TODO: link zodra de PO zijn account doorgeeft
                                    <span className={classes.pending}>Instagram volgt</span>
                                )}
                            </li>
                        </ul>
                    </div>

                    <nav aria-label="Footermenu">
                        <h2 className={classes.heading}>Pagina's</h2>
                        <ul className={classes.list}>
                            {navItems.map(item => (
                                <li key={item.to} className={classes.item}>
                                    <Link component={RouterLink} to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className={classes.heading}>Bedrijfsgegevens</h2>
                        <CompanyDetails className={classes.companyDetails} showAddress />
                    </div>
                </div>

                <div className={classes.bottom}>
                    <span>
                        © {new Date().getFullYear()} {companyName}
                    </span>
                    <Link component={RouterLink} to="/privacy" className={classes.bottomLink}>
                        Privacyverklaring
                    </Link>
                </div>
            </Container>
        </footer>
    );
}
