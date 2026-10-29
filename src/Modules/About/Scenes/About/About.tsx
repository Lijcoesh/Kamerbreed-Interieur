import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import AboutIntro from './Components/AboutIntro';

export default function About() {
    useDocumentTitle('Over mij | Kamerbreed Interieur');

    return <AboutIntro />;
}
