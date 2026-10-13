import { Container, IconButton } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { border, ink, logoBlue, ochre, olive, white } from 'src/colors';
import BrandLockup from 'src/Components/BrandLockup/BrandLockup';
import MenuIcon from 'src/Components/Icons/MenuIcon';
import PhoneIcon from 'src/Components/Icons/PhoneIcon';
import { phoneDisplay, phoneHref } from 'src/Config/company';
import { navItems } from 'src/Config/navigation';
import { headerHeight, headerHeightSmall } from 'src/Theme/sizes';

import MobileMenu from './MobileMenu';

const useStyles = makeStyles()(theme => ({
    root: {
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar,
        backgroundColor: white,
        borderBottom: `1px solid ${border}`,
    },
    bar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        height: headerHeight,
        [theme.breakpoints.down('sm')]: {
            height: headerHeightSmall,
        },
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    list: {
        display: 'flex',
        gap: theme.spacing(3),
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    link: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: 48,
        color: ink,
        fontWeight: 500,
        fontSize: '1.0625rem',
        textDecoration: 'none',
        borderRadius: 2,
        // Oker streep: het teken voor "actief"
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 6,
            height: 3,
            backgroundColor: ochre,
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        '&:hover': {
            color: olive,
        },
        '&:focus-visible': {
            outline: `2px solid ${logoBlue}`,
            outlineOffset: 2,
        },
        '@media (prefers-reduced-motion: reduce)': {
            '&::after': { transition: 'none' },
        },
    },
    active: {
        color: olive,
        fontWeight: 600,
        '&::after': {
            transform: 'scaleX(1)',
        },
    },
    compact: {
        display: 'none',
        gap: theme.spacing(0.5),
        marginRight: theme.spacing(-1),
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
    },
    iconButton: {
        color: olive,
    },
}));

export default function AppHeader() {
    const { classes, cx } = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={classes.root}>
            <Container className={classes.bar}>
                <BrandLockup />

                <nav aria-label="Hoofdmenu" className={classes.nav}>
                    <ul className={classes.list}>
                        {navItems.map(item => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end
                                    className={({ isActive }) =>
                                        cx(classes.link, isActive && classes.active)
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={classes.compact}>
                    <IconButton
                        href={phoneHref}
                        aria-label={`Bellen: ${phoneDisplay}`}
                        className={classes.iconButton}
                    >
                        <PhoneIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Menu openen"
                        aria-haspopup="dialog"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(true)}
                        className={classes.iconButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </Container>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}
