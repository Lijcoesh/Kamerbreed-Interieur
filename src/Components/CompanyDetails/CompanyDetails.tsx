import { makeStyles } from 'tss-react/mui';

import { muted } from 'src/colors';
import { companyName, kvkNumber, vatNumber } from 'src/Config/company';

interface IProps {
    className?: string;
}

// Bedrijfsgegevens zoals in de footer en op Contact
const useStyles = makeStyles()({
    root: {
        margin: 0,
        fontSize: '1.125rem',
        lineHeight: 1.7,
    },
    pending: {
        color: muted,
    },
});

export default function CompanyDetails(props: IProps) {
    const { className } = props;

    const { classes, cx } = useStyles();

    return (
        <p className={cx(classes.root, className)}>
            {companyName}
            <br />
            KvK {kvkNumber}
            <br />
            {vatNumber ? (
                <>Btw {vatNumber}</>
            ) : (
                // TODO: btw-nummer volgt van de PO
                <span className={classes.pending}>Btw-nummer volgt</span>
            )}
            {/* TODO: adres? De PO wil het niet tonen, maar art. 3:15d BW vraagt waarschijnlijk het vestigingsadres. Beslissing staat open in Gesprek-PO.md. */}
        </p>
    );
}
