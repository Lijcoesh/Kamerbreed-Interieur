import { makeStyles } from 'tss-react/mui';

import ContactBand from 'src/Components/ContactBand/ContactBand';
import { projects } from 'src/Config/projects';
import { services } from 'src/Config/services';
import { sectionSpacing } from 'src/Theme/sizes';

import ProjectGroup from './Components/ProjectGroup';
import ProjectsIntro from './Components/ProjectsIntro';

// Per soort, in de volgorde van de diensten
const groups = services.map(service => ({
    service,
    projects: projects.filter(project => project.services.includes(service.id)),
}));

const useStyles = makeStyles()({
    groups: {
        paddingBottom: sectionSpacing,
    },
});

export default function Projects() {
    const { classes } = useStyles();

    return (
        <>
            <ProjectsIntro
                groups={groups.map(group => ({
                    service: group.service,
                    count: group.projects.length,
                }))}
            />
            <div className={classes.groups}>
                {groups.map(group => (
                    <ProjectGroup
                        key={group.service.id}
                        service={group.service}
                        projects={group.projects}
                    />
                ))}
            </div>
            <ContactBand />
        </>
    );
}
