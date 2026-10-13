import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border } from 'src/colors';
import Photo from 'src/Components/Photo/Photo';
import { services } from 'src/Config/services';
import type { Project } from 'src/Definitions/Project';
import type { ServiceId } from 'src/Definitions/Service';

interface IProps {
    project: Project;
    // De soort waaronder de rij staat; andere diensten van het project komen als "Ook:" eronder
    serviceId: ServiceId;
}

const listFormat = new Intl.ListFormat('nl', { type: 'conjunction' });

// Foto links op een derde, tekst rechts; op de telefoon de foto erboven
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        alignItems: 'start',
        gap: theme.spacing(5),
        padding: theme.spacing(4, 0),
        borderBottom: `1px solid ${border}`,
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(2),
            padding: theme.spacing(3, 0),
        },
    },
    text: {
        marginTop: theme.spacing(1),
        maxWidth: '52ch',
    },
    also: {
        marginTop: theme.spacing(1.5),
    },
}));

export default function ProjectRow(props: IProps) {
    const { project, serviceId } = props;

    const { classes } = useStyles();

    const otherServices = services
        .filter(service => service.id !== serviceId && project.services.includes(service.id))
        .map(service => service.name.toLowerCase());

    return (
        <li className={classes.root}>
            <Photo photo={project.photo} ratio="4 / 3" label="Projectfoto volgt" />
            <div>
                <Typography variant="h3">{project.title}</Typography>
                <Typography variant="body1" className={classes.text}>
                    {project.text}
                </Typography>
                {otherServices.length > 0 && (
                    <Typography variant="body2" color="textSecondary" className={classes.also}>
                        Ook: {listFormat.format(otherServices)}
                    </Typography>
                )}
            </div>
        </li>
    );
}
