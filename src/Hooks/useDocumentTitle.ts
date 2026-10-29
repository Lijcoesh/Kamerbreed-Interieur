import { useEffect } from 'react';

// Zet de titel van het tabblad per pagina; de router doet dit niet zelf.
export function useDocumentTitle(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
