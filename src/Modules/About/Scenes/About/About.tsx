import ContactBand from 'src/Components/ContactBand/ContactBand';

import AboutIntro from './Components/AboutIntro';
import AboutServices from './Components/AboutServices';
import AboutWorkflow from './Components/AboutWorkflow';

export default function About() {
    return (
        <>
            <AboutIntro />
            <AboutWorkflow />
            <AboutServices />
            <ContactBand />
        </>
    );
}
