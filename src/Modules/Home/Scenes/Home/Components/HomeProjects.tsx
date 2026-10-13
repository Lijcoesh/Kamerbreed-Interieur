import { Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { border } from 'src/colors';
import ArrowForwardIcon from 'src/Components/Icons/ArrowForwardIcon';
import PhotoPlaceholder from 'src/Components/PhotoPlaceholder/PhotoPlaceholder';
import { sectionSpacing } from 'src/Theme/sizes';

import SectionHeader from './SectionHeader';

// TODO: vervangen door de nieuwste projecten zodra de PO foto's stuurt
const placeholderCount = 3;

const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        paddingTop: sectionSpacing,
        paddingBottom: sectionSpacing,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },
    },
    // Eén groot beeld en twee kleine: rustiger dan drie gelijke tegels
    large: {
        gridRow: 'span 2',
        aspectRatio: 'auto',
        [theme.breakpoints.down('sm')]: {
            gridRow: 'auto',
            aspectRatio: '4 / 3',
        },
    },
    more: {
        marginTop: theme.spacing(4),
    },
}));

export default function HomeProjects() {
    const { classes } = useStyles();

    return (
        <section aria-labelledby="projects-title" className={classes.root}>
            <Container>
                <SectionHeader
                    id="projects-title"
                    title="Projecten"
                    lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta."
                />
                <div className={classes.grid}>
                    {Array.from({ length: placeholderCount }, (_, index) => (
                        <PhotoPlaceholder
                            key={index}
                            ratio={index === 0 ? '4 / 3' : '16 / 10'}
                            label="Projectfoto volgt"
                            className={index === 0 ? classes.large : undefined}
                        />
                    ))}
                </div>
                <Button
                    component={RouterLink}
                    to="/projecten"
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    className={classes.more}
                >
                    Alle projecten bekijken
                </Button>
            </Container>
        </section>
    );
}
