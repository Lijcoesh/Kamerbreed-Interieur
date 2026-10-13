import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { border } from 'src/colors';
import ArrowForwardIcon from 'src/Components/Icons/ArrowForwardIcon';
import SectionHeader from 'src/Components/SectionHeader/SectionHeader';
import { services } from 'src/Config/services';
import type { Service } from 'src/Definitions/Service';
import { sectionSpacing } from 'src/Theme/sizes';

const groups: { id: Service['group']; label: string }[] = [
    { id: 'vloeren', label: 'Vloeren' },
    { id: 'raambekleding', label: 'Raambekleding' },
];

const listFormat = new Intl.ListFormat('nl', { type: 'conjunction' });

// Kort: de diensten staan uitgebreid op Home. Per groep één regel.
const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        alignItems: 'start',
        gap: theme.spacing(8),
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: 0,
        },
    },
    list: {
        margin: 0,
        borderTop: `1px solid ${border}`,
    },
    group: {
        display: 'grid',
        gridTemplateColumns: '11rem 1fr',
        alignItems: 'baseline',
        gap: theme.spacing(1, 3),
        padding: theme.spacing(3, 0),
        borderBottom: `1px solid ${border}`,
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            padding: theme.spacing(2.5, 0),
        },
    },
    services: {
        margin: 0,
    },
    more: {
        marginTop: theme.spacing(4),
    },
}));

export default function AboutServices() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="services-title" className={classes.root}>
            <SectionHeader
                id="services-title"
                title="Wat ik doe"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio, praesent libero."
            />
            <div>
                <dl className={classes.list}>
                    {groups.map(group => {
                        const names = services
                            .filter(service => service.group === group.id)
                            .map((service, index) =>
                                index === 0 ? service.name : service.name.toLowerCase(),
                            );

                        return (
                            <div key={group.id} className={classes.group}>
                                <Typography variant="h3" component="dt">
                                    {group.label}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="dd"
                                    className={classes.services}
                                >
                                    {listFormat.format(names)}
                                </Typography>
                            </div>
                        );
                    })}
                </dl>
                <Button
                    component={RouterLink}
                    to="/projecten"
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    className={classes.more}
                >
                    Bekijk mijn projecten
                </Button>
            </div>
        </Container>
    );
}
