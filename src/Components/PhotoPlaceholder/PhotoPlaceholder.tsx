import { makeStyles } from 'tss-react/mui';

import { border, ink, placeholder } from 'src/colors';

interface IProps {
    // CSS aspect-ratio, bv. '4 / 5'
    ratio: string;
    label?: string;
    className?: string;
}

// Neutrale plek voor een foto die de PO nog aanlevert. Geen gegenereerde beelden:
// die zouden doorgaan voor zijn werk. Verdwijnt zodra de echte foto's er zijn.
const useStyles = makeStyles<{ ratio: string }>()((theme, { ratio }) => ({
    root: {
        aspectRatio: ratio,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        padding: theme.spacing(2),
        backgroundColor: placeholder,
        border: `1px solid ${border}`,
        borderRadius: 4,
        color: ink,
        fontSize: '0.9375rem',
    },
}));

export default function PhotoPlaceholder(props: IProps) {
    const { ratio, label = 'Foto volgt', className } = props;

    const { classes, cx } = useStyles({ ratio });

    return (
        <div className={cx(classes.root, className)} aria-hidden>
            {label}
        </div>
    );
}
