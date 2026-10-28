import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Bij een andere pagina naar boven; met een #anker (/privacy#gegevens) naar die sectie.
// De router doet dit niet zelf. Direct, niet vloeiend: de html heeft scroll-behavior smooth.
export function useScrollOnNavigate() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

        if (target) {
            target.scrollIntoView({ behavior: 'instant' });
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);
}
