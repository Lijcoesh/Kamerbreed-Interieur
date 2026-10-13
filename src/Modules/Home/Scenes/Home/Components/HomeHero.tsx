import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import ContactButtons from 'src/Components/ContactButtons/ContactButtons';
import PhotoPlaceholder from 'src/Components/PhotoPlaceholder/PhotoPlaceholder';
import { region, slogan } from 'src/Config/company';
import { sectionSpacing } from 'src/Theme/sizes';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        alignItems: 'center',
        gap: theme.spacing(8),
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(5),
        },
    },
    slogan: {
        marginTop: theme.spacing(2.5),
    },
    intro: {
        marginTop: theme.spacing(2),
        maxWidth: '52ch',
    },
    actions: {
        marginTop: theme.spacing(4),
        maxWidth: 680,
    },
    personal: {
        marginTop: theme.spacing(2),
    },
    photo: {
        [theme.breakpoints.down('md')]: {
            aspectRatio: '3 / 2',
        },
    },
}));

export default function HomeHero() {
    const { classes } = useStyles();

    return (
        <Container component="section" aria-labelledby="home-title" className={classes.root}>
            <div>
                {/* Werktitel; de PO schrijft de definitieve tekst */}
                <Typography variant="h1" id="home-title">
                    Vloeren en raambekleding in het {region}
                </Typography>
                <Typography variant="subtitle1" component="p" className={classes.slogan}>
                    {slogan}
                </Typography>
                <Typography variant="body1" className={classes.intro}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.
                </Typography>
                <ContactButtons className={classes.actions} />
                {/* Werktitel: één persoon, van begin tot eind (PO) */}
                <Typography variant="body2" color="textSecondary" className={classes.personal}>
                    Ik kom zelf bij je thuis en doe het werk zelf.
                </Typography>
            </div>
            <PhotoPlaceholder ratio="4 / 5" label="Projectfoto volgt" className={classes.photo} />
        </Container>
    );
}
