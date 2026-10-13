import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { logoBlue, olive } from 'src/colors';
import { companyName } from 'src/Config/company';
// TODO: tijdelijke JPEG van de oude site; vervangen door het originele logo (zie src/Resources/README.md)
import logo from 'src/Resources/Logo/kamerbreed-logo.jpeg';
import { serifFontFamily } from 'src/Theme/typography';

// Logo is 310 × 264 px
const logoRatio = 310 / 264;

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        color: olive,
        textDecoration: 'none',
        borderRadius: 2,
        '&:focus-visible': {
            outline: `2px solid ${logoBlue}`,
            outlineOffset: 4,
        },
    },
    logo: {
        display: 'block',
        height: 52,
        width: 52 * logoRatio,
        [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 40 * logoRatio,
        },
    },
    name: {
        fontFamily: serifFontFamily,
        fontWeight: 600,
        fontSize: '1.3rem',
        lineHeight: 1.1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.0625rem',
        },
    },
}));

export default function BrandLockup() {
    const { classes } = useStyles();

    return (
        <RouterLink to="/" className={classes.root}>
            <img src={logo} alt="" className={classes.logo} />
            <span className={classes.name}>{companyName}</span>
        </RouterLink>
    );
}
