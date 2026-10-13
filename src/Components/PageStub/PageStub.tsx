import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { sectionSpacing } from 'src/Theme/sizes';

interface IProps {
    title: string;
}

// Tijdelijk: houdt de navigatie werkend tot Projecten, Over mij en Contact gebouwd zijn (TODO.md)
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: 'clamp(40px, 6vw, 88px)',
        paddingBottom: sectionSpacing,
    },
    text: {
        marginTop: theme.spacing(2),
        maxWidth: '58ch',
    },
}));

export default function PageStub(props: IProps) {
    const { title } = props;

    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="body1" className={classes.text}>
                Deze pagina wordt nog gebouwd.
            </Typography>
        </Container>
    );
}
