import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border } from 'src/colors';
import type { Project } from 'src/Definitions/Project';
import type { Service } from 'src/Definitions/Service';
import { projectCountLabel } from 'src/Helpers/projectCountLabel';

import ProjectRow from './ProjectRow';

interface IProps {
    service: Service;
    projects: Project[];
}

// Eén soort: kop met aantal, daaronder de opleverlijst
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: 'clamp(48px, 6vw, 80px)',
    },
    header: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        columnGap: theme.spacing(3),
        rowGap: theme.spacing(0.5),
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${border}`,
        // Op de telefoon altijd onder de kop, ook bij korte namen, zodat elke soort hetzelfde begint
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    empty: {
        padding: theme.spacing(3, 0),
        borderBottom: `1px solid ${border}`,
    },
}));

export default function ProjectGroup(props: IProps) {
    const { service, projects } = props;

    const { classes } = useStyles();

    const titleId = `${service.id}-title`;

    return (
        <Container
            component="section"
            id={service.id}
            aria-labelledby={titleId}
            className={classes.root}
        >
            <div className={classes.header}>
                <Typography variant="h2" id={titleId}>
                    {service.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {projectCountLabel(projects.length)}
                </Typography>
            </div>
            {projects.length > 0 ? (
                <ul className={classes.list}>
                    {projects.map(project => (
                        <ProjectRow key={project.id} project={project} serviceId={service.id} />
                    ))}
                </ul>
            ) : (
                <Typography variant="body1" className={classes.empty}>
                    Hier komen binnenkort foto's van mijn werk.
                </Typography>
            )}
        </Container>
    );
}
