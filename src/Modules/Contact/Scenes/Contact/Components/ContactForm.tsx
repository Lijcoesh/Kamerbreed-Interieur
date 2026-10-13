import { Button, Link, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { error as errorColor, ink } from 'src/colors';
import FormField from 'src/Components/FormField/FormField';
import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/company';
import type { ContactErrors, ContactField, ContactMessage } from 'src/Definitions/ContactMessage';
import { contactLimits, validateContactMessage } from 'src/Helpers/validateContactMessage';
import { sendContactMessage } from 'src/Logic/sendContactMessage';
import type { SendResult } from 'src/Logic/sendContactMessage';
import { borderRadius } from 'src/Theme/sizes';

// Volgorde waarin de focus naar het eerste foute veld gaat
const fieldOrder: (ContactField | 'contact')[] = ['name', 'email', 'phone', 'contact', 'message'];

const emptyMessage: ContactMessage = { name: '', email: '', phone: '', message: '', website: '' };

const failureText: Record<Exclude<SendResult, 'sent'>, string> = {
    'not-connected': 'Het formulier werkt nog niet. Bel of mail me zolang direct.',
    'rate-limited':
        'Er zijn net veel berichten verstuurd. Probeer het over een paar minuten opnieuw, of bel of mail me direct.',
    failed: 'Je bericht is niet verstuurd. Probeer het opnieuw, of bel of mail me direct.',
};

const useStyles = makeStyles()(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
    },
    group: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        margin: 0,
        padding: 0,
        border: 'none',
        minWidth: 0,
    },
    // Alleen voor schermlezers: de groep heeft een naam, maar toont geen kop
    legend: {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
        border: 0,
    },
    groupError: {
        margin: 0,
        fontSize: '1rem',
        fontWeight: 500,
        color: errorColor,
    },
    pair: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },
    },
    // Onzichtbaar voor mensen, niet bereikbaar met Tab; bots vullen het wel in
    honeypot: {
        position: 'absolute',
        left: -10000,
        width: 1,
        height: 1,
        overflow: 'hidden',
    },
    alert: {
        padding: theme.spacing(2, 2.5),
        border: `1px solid ${errorColor}`,
        borderRadius,
        color: ink,
    },
    alertTitle: {
        display: 'block',
        marginBottom: theme.spacing(0.5),
        fontWeight: 600,
        color: errorColor,
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
    },
    privacy: {
        color: theme.palette.text.secondary,
        maxWidth: '52ch',
    },
    success: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        outline: 'none',
    },
}));

export default function ContactForm() {
    const { classes } = useStyles();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const successRef = useRef<HTMLDivElement>(null);

    const [values, setValues] = useState<ContactMessage>(emptyMessage);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState<SendResult | null>(null);

    const update = (field: keyof ContactMessage) => (value: string) => {
        const next = { ...values, [field]: value };
        setValues(next);

        // Na de eerste poging verdwijnt een fout zodra het veld klopt
        if (submitted) setErrors(validateContactMessage(next));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setResult(null);

        const nextErrors = validateContactMessage(values);
        setErrors(nextErrors);

        const firstError = fieldOrder.find(field => nextErrors[field]);
        if (firstError) {
            const refs = {
                name: nameRef,
                email: emailRef,
                phone: phoneRef,
                contact: emailRef,
                message: messageRef,
            };
            refs[firstError].current?.focus();
            return;
        }

        setSending(true);
        const outcome = await sendContactMessage(values);
        setSending(false);
        setResult(outcome);

        if (outcome === 'sent') {
            setValues(emptyMessage);
            setSubmitted(false);
            // Na het renderen van de bevestiging de focus erheen, zodat een schermlezer hem voorleest
            requestAnimationFrame(() => successRef.current?.focus());
        }
    };

    const startOver = () => {
        setResult(null);
        requestAnimationFrame(() => nameRef.current?.focus());
    };

    if (result === 'sent') {
        return (
            <div ref={successRef} tabIndex={-1} role="status" className={classes.success}>
                <Typography variant="h3" component="p">
                    Bedankt, je bericht is verstuurd.
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </Typography>
                <Button variant="outlined" color="primary" size="large" onClick={startOver}>
                    Nog een bericht sturen
                </Button>
            </div>
        );
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className={classes.form}
            aria-describedby="contact-privacy"
        >
            <FormField
                id="name"
                label="Naam"
                value={values.name}
                onChange={update('name')}
                maxLength={contactLimits.name}
                error={errors.name}
                autoComplete="name"
                inputRef={nameRef}
            />

            <fieldset className={classes.group}>
                <legend className={classes.legend}>E-mailadres of telefoonnummer</legend>
                <div className={classes.pair}>
                    <FormField
                        id="email"
                        label="E-mailadres"
                        type="email"
                        value={values.email ?? ''}
                        onChange={update('email')}
                        maxLength={contactLimits.email}
                        error={errors.email}
                        invalid={Boolean(errors.contact)}
                        describedBy={errors.contact ? 'contact-error' : undefined}
                        autoComplete="email"
                        inputMode="email"
                        inputRef={emailRef}
                    />
                    <FormField
                        id="phone"
                        label="Telefoonnummer"
                        type="tel"
                        value={values.phone ?? ''}
                        onChange={update('phone')}
                        maxLength={contactLimits.phone}
                        error={errors.phone}
                        invalid={Boolean(errors.contact)}
                        describedBy={errors.contact ? 'contact-error' : undefined}
                        autoComplete="tel"
                        inputMode="tel"
                        inputRef={phoneRef}
                    />
                </div>
                {errors.contact && (
                    <p id="contact-error" className={classes.groupError}>
                        {errors.contact}
                    </p>
                )}
            </fieldset>

            <FormField
                id="message"
                label="Bericht"
                value={values.message}
                onChange={update('message')}
                maxLength={contactLimits.message}
                error={errors.message}
                multiline
                showCount
                inputRef={messageRef}
            />

            <div className={classes.honeypot} aria-hidden>
                <label htmlFor="website">Laat dit veld leeg</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={event => update('website')(event.target.value)}
                />
            </div>

            {result && (
                <div role="alert" className={classes.alert}>
                    <span className={classes.alertTitle}>Niet verstuurd</span>
                    {failureText[result]}{' '}
                    <Link href={phoneHref} className={classes.nowrap}>
                        {phoneDisplay}
                    </Link>{' '}
                    of <Link href={emailHref}>{email}</Link>.
                </div>
            )}

            <div className={classes.actions}>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={sending}
                >
                    {sending ? 'Bezig met versturen…' : 'Versturen'}
                </Button>
                <Typography variant="body2" id="contact-privacy" className={classes.privacy}>
                    Ik gebruik je gegevens alleen om op je bericht te reageren. Lees meer in de{' '}
                    <Link component={RouterLink} to="/privacy">
                        privacyverklaring
                    </Link>
                    .
                </Typography>
            </div>
        </form>
    );
}
