import { Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import MailIcon from 'src/Components/Icons/MailIcon';
import PhoneIcon from 'src/Components/Icons/PhoneIcon';
import WhatsAppIcon from 'src/Components/Icons/WhatsAppIcon';
import { email, emailHref, phoneDisplay, phoneHref, whatsappNumber } from 'src/Config/company';

interface IProps {
    // 'row': naast elkaar zodra beide knoppen passen; 'stack': altijd onder elkaar (drawer)
    layout?: 'row' | 'stack';
    className?: string;
}

// Bellen en mailen zijn even zwaar (keuze gebruiker, 12-10-2026); WhatsApp sluit zich als gelijke aan zodra hij aan staat
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gap: theme.spacing(1.5),
        gridTemplateColumns: '1fr',
    },
    // Twee even brede kolommen zodra het e-mailadres op één regel past, anders onder elkaar
    row: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    },
    button: {
        justifyContent: 'flex-start',
        textAlign: 'left',
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        '& .MuiButton-startIcon': {
            marginRight: theme.spacing(1.5),
        },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
    },
    label: {
        lineHeight: 1.2,
    },
    detail: {
        fontWeight: 400,
        fontSize: '1.0625rem',
        lineHeight: 1.3,
        overflowWrap: 'anywhere',
    },
}));

export default function ContactButtons(props: IProps) {
    const { layout = 'row', className } = props;

    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.root, layout === 'row' && classes.row, className)}>
            <Button
                href={phoneHref}
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneIcon />}
                className={classes.button}
            >
                <span className={classes.text}>
                    <span className={classes.label}>Bellen</span>
                    <span className={classes.detail}>{phoneDisplay}</span>
                </span>
            </Button>
            <Button
                href={emailHref}
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<MailIcon />}
                className={classes.button}
            >
                <span className={classes.text}>
                    <span className={classes.label}>Mailen</span>
                    <span className={classes.detail}>{email}</span>
                </span>
            </Button>
            {whatsappNumber && (
                <Button
                    href={`https://wa.me/${whatsappNumber}`}
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    className={classes.button}
                >
                    <span className={classes.text}>
                        <span className={classes.label}>WhatsApp</span>
                        <span className={classes.detail}>{phoneDisplay}</span>
                    </span>
                </Button>
            )}
        </div>
    );
}
