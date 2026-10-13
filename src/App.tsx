import { Navigate, Route, Routes } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import AppFooter from 'src/Components/AppFooter/AppFooter';
import AppHeader from 'src/Components/AppHeader/AppHeader';
import SkipLink from 'src/Components/SkipLink/SkipLink';
import About from 'src/Modules/About/Scenes/About/About';
import Contact from 'src/Modules/Contact/Scenes/Contact/Contact';
import Home from 'src/Modules/Home/Scenes/Home/Home';
import Projects from 'src/Modules/Projects/Scenes/Projects/Projects';

// Minstens schermhoog, zodat een footer op korte pagina's onderaan blijft
const useStyles = makeStyles()({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // Krijgt focus via een skip-link, maar is zelf niet bedienbaar
        outline: 'none',
    },
});

export default function App() {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <SkipLink />
            <AppHeader />
            <main id="main" tabIndex={-1} className={classes.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projecten" element={<Projects />} />
                    <Route path="/over-mij" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    );
}
