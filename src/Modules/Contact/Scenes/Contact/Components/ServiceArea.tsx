import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { region, serviceArea } from 'src/Config/company';

const useStyles = makeStyles()(theme => ({
    intro: {
        marginBottom: theme.spacing(1.5),
    },
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: theme.spacing(0.5, 3),
        margin: 0,
        padding: 0,
        listStyle: 'none',
        fontSize: '1.125rem',
        lineHeight: 1.7,
    },
}));

export default function ServiceArea() {
    const { classes } = useStyles();

    return (
        <>
            <Typography variant="body1" className={classes.intro}>
                Ik kom bij je thuis in het {region}:
            </Typography>
            <ul className={classes.list}>
                {serviceArea.map(place => (
                    <li key={place}>{place}</li>
                ))}
            </ul>
        </>
    );
}
