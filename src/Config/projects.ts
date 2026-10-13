import type { Project } from 'src/Definitions/Project';
import binnenzonwering1 from 'src/Resources/Photos/Temp/binnenzonwering-1.jpg';
import binnenzonwering2 from 'src/Resources/Photos/Temp/binnenzonwering-2.jpg';
import laminaat1 from 'src/Resources/Photos/Temp/laminaat-1.jpg';
import laminaat2 from 'src/Resources/Photos/Temp/laminaat-2.jpg';
import laminaat3 from 'src/Resources/Photos/Temp/laminaat-3.jpg';
import pvc1 from 'src/Resources/Photos/Temp/pvc-1.jpg';
import pvc2 from 'src/Resources/Photos/Temp/pvc-2.jpg';
import pvc3 from 'src/Resources/Photos/Temp/pvc-3.jpg';
import tapijt1 from 'src/Resources/Photos/Temp/tapijt-1.jpg';
import tapijt2 from 'src/Resources/Photos/Temp/tapijt-2.jpg';
import vloerbedekking1 from 'src/Resources/Photos/Temp/vloerbedekking-1.jpg';
import vloerbedekking2 from 'src/Resources/Photos/Temp/vloerbedekking-2.jpg';

// Alle projecten op één plek; nieuwste bovenaan. Home toont de eerste drie, Projecten groepeert per soort.
// Een project met meer diensten staat onder elke soort.
// TODO: dit zijn placeholders tot de PO foto's, titels en teksten stuurt (Gesprek-PO.md, vraag 5).
// De foto's zijn tijdelijke stockfoto's (CC0, zie src/Resources/README.md), niet zijn werk.
// Geen klantnamen, huisnummers of herkenbare personen; plaats in het Westland mag.
export const projects: Project[] = [
    {
        id: 'pvc-1',
        title: 'Voorbeeldproject 1',
        services: ['pvc'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: {
            src: pvc1,
            alt: 'Open woonruimte met een visgraatvloer, een grijze bank en een lange eettafel',
        },
    },
    {
        id: 'laminaat-1',
        title: 'Voorbeeldproject 1',
        services: ['laminaat'],
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        photo: {
            src: laminaat1,
            alt: 'Lege kamer met een lichte plankenvloer en openstaande witte deuren',
        },
    },
    {
        id: 'tapijt-1',
        title: 'Voorbeeldproject 1',
        services: ['tapijt'],
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
        photo: {
            src: tapijt1,
            alt: 'Witte bank en salontafel op een grijs tapijt met patroon',
        },
    },
    {
        id: 'binnenzonwering-1',
        title: 'Voorbeeldproject 1',
        services: ['binnenzonwering'],
        text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
        photo: {
            src: binnenzonwering1,
            alt: 'Woonkamer met een stalen trap en jaloezieën voor de ramen',
        },
    },
    {
        id: 'vloerbedekking-1',
        title: 'Voorbeeldproject 1',
        services: ['vloerbedekking'],
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
        photo: {
            src: vloerbedekking1,
            alt: 'Slaapkamer met lichtgrijze vaste vloerbedekking en een gestoffeerd bed',
        },
    },
    {
        id: 'pvc-2',
        title: 'Voorbeeldproject 2',
        services: ['pvc'],
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        photo: {
            src: pvc2,
            alt: 'Woonkamer met een visgraatvloer, een blauwe bank en een witte tv-kast',
        },
    },
    {
        id: 'laminaat-2',
        title: 'Voorbeeldproject 2',
        services: ['laminaat'],
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        photo: {
            src: laminaat2,
            alt: 'Eethoek met een lichte houten vloer, een zwarte tafel en witte stoelen',
        },
    },
    {
        id: 'tapijt-2',
        title: 'Voorbeeldproject 2',
        services: ['tapijt'],
        text: 'Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi.',
        photo: {
            src: tapijt2,
            alt: 'Lichte slaapkamer met een hoogpolig grijs vloerkleed naast het bed',
        },
    },
    {
        id: 'binnenzonwering-2',
        title: 'Voorbeeldproject 2',
        services: ['binnenzonwering'],
        text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.',
        photo: {
            src: binnenzonwering2,
            alt: 'Witte jaloezieën achter een bureau met een laptop',
        },
    },
    {
        id: 'vloerbedekking-2',
        title: 'Voorbeeldproject 2',
        services: ['vloerbedekking'],
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        photo: {
            src: vloerbedekking2,
            alt: 'Werkhoek met een geel stoeltje op beige vaste vloerbedekking',
            position: 'center 80%',
        },
    },
    {
        id: 'pvc-3',
        title: 'Voorbeeldproject 3',
        services: ['pvc'],
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        photo: {
            src: pvc3,
            alt: 'Hal met een grijze plankenvloer, een trap en een schuifdeur',
        },
    },
    {
        id: 'laminaat-3',
        title: 'Voorbeeldproject 3',
        services: ['laminaat'],
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        photo: {
            src: laminaat3,
            alt: 'Slaapkamer met een houten vloer, een tweepersoonsbed en een kledingkast',
        },
    },
];
