import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IProps {
    title: string;
    lead?: string;
    id?: string;
    className?: string;
}

const useStyles = makeStyles()(theme => ({
    root: {
        maxWidth: '62ch',
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(4),
        },
    },
    lead: {
        marginTop: theme.spacing(2),
    },
}));

export default function SectionHeader(props: IProps) {
    const { title, lead, id, className } = props;

    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="h2" id={id}>
                {title}
            </Typography>
            {lead && (
                <Typography variant="body1" className={classes.lead}>
                    {lead}
                </Typography>
            )}
        </div>
    );
}
