import HomeAbout from './Components/HomeAbout';
import HomeContact from './Components/HomeContact';
import HomeHero from './Components/HomeHero';
import HomeProjects from './Components/HomeProjects';
import HomeServices from './Components/HomeServices';
import HomeWorkflow from './Components/HomeWorkflow';

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeServices />
            <HomeWorkflow />
            <HomeProjects />
            <HomeAbout />
            <HomeContact />
        </>
    );
}
