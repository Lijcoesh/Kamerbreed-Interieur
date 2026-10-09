import { Navigate, Route, Routes } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import Home from 'src/Modules/Home/Scenes/Home/Home';

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
            <main id="main" tabIndex={-1} className={classes.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
}
