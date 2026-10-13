import { useEffect } from 'react';
import { useLocation } from 'react-router';

// De browser scrolt bij het laden naar #soort voordat de pagina gerenderd is; dit doet het daarna alsnog
export function useScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            return;
        }

        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    }, [hash]);
}
