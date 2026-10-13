import { OutlinedInput } from '@mui/material';
import type { InputBaseComponentProps } from '@mui/material';
import type { Ref } from 'react';
import { makeStyles } from 'tss-react/mui';

import { error as errorColor, ink, muted } from 'src/colors';

interface IProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    maxLength: number;
    error?: string;
    // Fout zonder eigen melding, bv. als een groepsmelding onder meerdere velden staat
    invalid?: boolean;
    // Extra id's voor aria-describedby, bv. die groepsmelding
    describedBy?: string;
    hint?: string;
    optional?: boolean;
    type?: 'text' | 'email' | 'tel';
    autoComplete?: string;
    inputMode?: InputBaseComponentProps['inputMode'];
    multiline?: boolean;
    rows?: number;
    // Toont "123 / 2000" onder het veld (voor lange tekst)
    showCount?: boolean;
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
}

// Eén veld: label erboven, eventueel een hint, de foutmelding eronder (.claude/conventions/components.md)
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(0.75),
    },
    label: {
        fontWeight: 600,
        fontSize: '1.0625rem',
        color: ink,
    },
    optional: {
        fontWeight: 400,
        color: muted,
    },
    hint: {
        margin: 0,
        fontSize: '1rem',
        color: muted,
    },
    below: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        minHeight: 0,
    },
    error: {
        flex: 1,
        margin: 0,
        fontSize: '1rem',
        fontWeight: 500,
        color: errorColor,
    },
    count: {
        marginLeft: 'auto',
        fontSize: '1rem',
        color: muted,
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
    },
}));

export default function FormField(props: IProps) {
    const {
        id,
        label,
        value,
        onChange,
        maxLength,
        error,
        invalid = false,
        describedBy: extraDescribedBy,
        hint,
        optional = false,
        type = 'text',
        autoComplete,
        inputMode,
        multiline = false,
        rows = 6,
        showCount = false,
        inputRef,
    } = props;

    const { classes } = useStyles();

    const hintId = hint ? `${id}-hint` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [hintId, errorId, extraDescribedBy].filter(Boolean).join(' ') || undefined;
    const hasError = Boolean(error) || invalid;

    return (
        <div className={classes.root}>
            <label htmlFor={id} className={classes.label}>
                {label}
                {optional && <span className={classes.optional}> (optioneel)</span>}
            </label>
            {hint && (
                <p id={hintId} className={classes.hint}>
                    {hint}
                </p>
            )}
            <OutlinedInput
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
                error={hasError}
                multiline={multiline}
                minRows={multiline ? rows : undefined}
                autoComplete={autoComplete}
                inputRef={inputRef}
                fullWidth
                inputProps={{
                    maxLength,
                    inputMode,
                    'aria-invalid': hasError,
                    'aria-describedby': describedBy,
                    'aria-required': !optional,
                }}
            />
            {(error || showCount) && (
                <div className={classes.below}>
                    {error && (
                        <p id={errorId} className={classes.error}>
                            {error}
                        </p>
                    )}
                    {showCount && (
                        <span className={classes.count} aria-hidden>
                            {value.length} / {maxLength}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
