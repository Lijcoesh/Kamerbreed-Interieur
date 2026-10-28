import ContactBand from 'src/Components/ContactBand/ContactBand';

import HomeAbout from './Components/HomeAbout';
import HomeHero from './Components/HomeHero';
import HomeServices from './Components/HomeServices';
import HomeWorkflow from './Components/HomeWorkflow';

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeServices />
            <HomeWorkflow />
            <HomeAbout />
            <ContactBand />
        </>
    );
}
