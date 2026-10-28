import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { ink, logoBlue, olive } from 'src/colors';
import { companyName, ownerName } from 'src/Config/company';
import logo from 'src/Resources/Logo/kamerbreed-logo.png';
import { serifFontFamily } from 'src/Theme/typography';

// Logo is 310 × 264 px, met transparante achtergrond; scherp tot ongeveer 130px hoog
const logoRatio = 310 / 264;

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        color: olive,
        textDecoration: 'none',
        borderRadius: 2,
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(1),
        },
        '&:focus-visible': {
            outline: `2px solid ${logoBlue}`,
            outlineOffset: 4,
        },
    },
    logo: {
        display: 'block',
        flexShrink: 0,
        height: 72,
        width: 72 * logoRatio,
        [theme.breakpoints.down('sm')]: {
            height: 42,
            width: 42 * logoRatio,
        },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    name: {
        fontFamily: serifFontFamily,
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: 1.1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
        },
    },
    owner: {
        whiteSpace: 'nowrap',
        color: ink,
        fontSize: '1.0625rem',
        lineHeight: 1.3,
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
        },
    },
}));

export default function BrandLockup() {
    const { classes } = useStyles();

    return (
        <RouterLink to="/" className={classes.root}>
            <img src={logo} alt="" className={classes.logo} />
            <span className={classes.text}>
                <span className={classes.name}>{companyName}</span>
                <span className={classes.owner}>{ownerName}</span>
            </span>
        </RouterLink>
    );
}
