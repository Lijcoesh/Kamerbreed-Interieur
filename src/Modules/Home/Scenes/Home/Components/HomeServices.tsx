import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { border, white } from 'src/colors';
import PhotoPlaceholder from 'src/Components/PhotoPlaceholder/PhotoPlaceholder';
import { services } from 'src/Config/services';
import { borderRadius, sectionSpacing } from 'src/Theme/sizes';

import SectionHeader from './SectionHeader';

const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
    },
    floors: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(5, 3),
        margin: 0,
        padding: 0,
        listStyle: 'none',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(3),
        },
    },
    // Op de telefoon compacte rijen: beeld links, tekst rechts
    floor: {
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridTemplateColumns: '2fr 3fr',
            alignItems: 'center',
            gap: theme.spacing(2),
        },
    },
    floorPhoto: {
        [theme.breakpoints.down('sm')]: {
            aspectRatio: '1 / 1',
            padding: theme.spacing(1),
            fontSize: '0.8125rem',
        },
    },
    name: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        },
    },
    summary: {
        marginTop: theme.spacing(1),
    },
    // Wit paneel op de achtergrond; de foto loopt tot de rand
    extra: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        marginTop: theme.spacing(7),
        backgroundColor: white,
        border: `1px solid ${border}`,
        borderRadius,
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },
    },
    extraPhoto: {
        border: 'none',
        borderRadius: 0,
    },
    extraText: {
        maxWidth: '52ch',
        padding: theme.spacing(4, 5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 2.5),
        },
    },
}));

export default function HomeServices() {
    const { classes } = useStyles();

    const floors = services.filter(service => service.group === 'vloeren');
    const extras = services.filter(service => service.group !== 'vloeren');

    return (
        <section aria-labelledby="services-title" className={classes.root}>
            <Container>
                <SectionHeader
                    id="services-title"
                    title="Wat ik doe"
                    lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio, praesent libero sed cursus ante dapibus diam."
                />

                <ul className={classes.floors}>
                    {floors.map(service => (
                        <li key={service.id} className={classes.floor}>
                            <PhotoPlaceholder ratio="4 / 3" className={classes.floorPhoto} />
                            <div>
                                <Typography variant="h3" className={classes.name}>
                                    {service.name}
                                </Typography>
                                <Typography variant="body2" className={classes.summary}>
                                    {service.summary}
                                </Typography>
                            </div>
                        </li>
                    ))}
                </ul>

                {extras.map(service => (
                    <div key={service.id} className={classes.extra}>
                        <PhotoPlaceholder ratio="3 / 2" className={classes.extraPhoto} />
                        <div className={classes.extraText}>
                            <Typography variant="h3">
                                Daarnaast: {service.name.toLowerCase()}
                            </Typography>
                            <Typography variant="body1" className={classes.summary}>
                                {service.summary}
                            </Typography>
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
