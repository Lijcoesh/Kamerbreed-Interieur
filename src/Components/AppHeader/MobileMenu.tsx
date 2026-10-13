import { Drawer, IconButton } from '@mui/material';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { background, border, ink, logoBlue, ochre, olive } from 'src/colors';
import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import CloseIcon from 'src/Components/Icons/CloseIcon';
import { navItems } from 'src/Config/navigation';
import { headerHeightSmall } from 'src/Theme/sizes';
import { serifFontFamily } from 'src/Theme/typography';

interface IProps {
    open: boolean;
    onClose: () => void;
}

// Modale drawer: MUI zet de focus erin vast en sluit op Esc
const useStyles = makeStyles()(theme => ({
    paper: {
        width: 'min(360px, 88vw)',
        backgroundColor: background,
        padding: theme.spacing(0, 2.5, 4),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: headerHeightSmall,
        marginRight: theme.spacing(-1),
    },
    close: {
        color: olive,
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        borderTop: `1px solid ${border}`,
    },
    item: {
        borderBottom: `1px solid ${border}`,
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        minHeight: 56,
        fontFamily: serifFontFamily,
        fontSize: '1.375rem',
        fontWeight: 500,
        color: ink,
        textDecoration: 'none',
        '&:focus-visible': {
            outline: `2px solid ${logoBlue}`,
            outlineOffset: 2,
        },
    },
    active: {
        color: olive,
        fontWeight: 600,
        '&::before': {
            content: '""',
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: ochre,
        },
    },
}));

export default function MobileMenu(props: IProps) {
    const { open, onClose } = props;

    const { classes, cx } = useStyles();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{ paper: { className: classes.paper, 'aria-label': 'Menu' } }}
        >
            <div className={classes.top}>
                <IconButton aria-label="Menu sluiten" onClick={onClose} className={classes.close}>
                    <CloseIcon />
                </IconButton>
            </div>
            <nav aria-label="Hoofdmenu">
                <ul className={classes.list}>
                    {navItems.map(item => (
                        <li key={item.to} className={classes.item}>
                            <NavLink
                                to={item.to}
                                end
                                onClick={onClose}
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
            <ContactButtons layout="stack" />
        </Drawer>
    );
}
