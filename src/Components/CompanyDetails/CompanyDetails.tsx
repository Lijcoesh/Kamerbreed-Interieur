import { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';

import { muted } from 'src/colors';
import { address, companyName, kvkNumber, legalForm, vatNumber } from 'src/Config/company';

interface IProps {
    className?: string;
    showAddress?: boolean;
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
    const { className, showAddress = false } = props;

    const { classes, cx } = useStyles();

    return (
        <p className={cx(classes.root, className)}>
            {companyName} {legalForm}
            <br />
            {showAddress &&
                address.map(line => (
                    <Fragment key={line}>
                        {line}
                        <br />
                    </Fragment>
                ))}
            KvK {kvkNumber}
            <br />
            {vatNumber ? (
                <>Btw {vatNumber}</>
            ) : (
                // TODO: btw-nummer volgt van de PO
                <span className={classes.pending}>Btw-nummer volgt</span>
            )}
        </p>
    );
}
