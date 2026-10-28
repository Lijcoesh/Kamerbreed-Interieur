import type { Service } from 'src/Definitions/Service';
import binnenzonweringPhoto from 'src/Resources/Photos/Services/binnenzonwering.jpg';
import egaliserenPhoto from 'src/Resources/Photos/Services/egaliseren.jpg';
import houtenVloerenPhoto from 'src/Resources/Photos/Services/houten-vloeren.jpg';
import laminaatPhoto from 'src/Resources/Photos/Services/laminaat.jpg';
import pvcPhoto from 'src/Resources/Photos/Services/pvc.jpg';
import tapijtPhoto from 'src/Resources/Photos/Services/tapijt.jpg';

// Namen, volgorde en omschrijvingen 1 op 1 van de PO (Website.pages, 28-10-2026).
// De foto's stuurde hij erbij (28-10-2026); herkomst in src/Resources/README.md.
export const services: Service[] = [
    {
        id: 'pvc',
        name: 'PVC-vloeren',
        group: 'vloeren',
        summary:
            'Stijlvol, duurzaam en onderhoudsvriendelijk. Een prachtige basis voor ieder interieur.',
        photo: {
            src: pvcPhoto,
            alt: 'Woonkamer met een lichte houten pvc-vloer, een lichte hoekbank en een ronde salontafel',
        },
    },
    {
        id: 'tapijt',
        name: 'Tapijt',
        group: 'vloeren',
        summary: 'Ervaar de luxe van zachtheid, warmte en optimaal wooncomfort.',
        photo: {
            src: tapijtPhoto,
            alt: 'Slaapkamer met grijs tapijt, een opgemaakt bed en een fauteuil bij het raam',
        },
    },
    {
        id: 'houten-vloeren',
        name: 'Houten vloeren',
        group: 'vloeren',
        summary: 'De pure schoonheid van echt hout. tijdloos, karaktervol en uniek.',
        photo: {
            src: houtenVloerenPhoto,
            alt: 'Woonkamer met een eikenhouten plankenvloer en een eethoek op de achtergrond',
        },
    },
    {
        id: 'laminaat',
        name: 'Laminaat',
        group: 'vloeren',
        summary: 'De warme uitstraling van hout, gecombineerd met gemak en betaalbaarheid',
        photo: {
            src: laminaatPhoto,
            alt: 'Slaapkamer met donkerbruin laminaat, een tweepersoonsbed en een vloerkleed',
        },
    },
    {
        id: 'egaliseren',
        name: 'Egaliseren',
        group: 'vloeren',
        summary: 'Een perfect eindresultaat begint bij een strakke en egale basis.',
        photo: {
            src: egaliserenPhoto,
            alt: 'Egalisatiemiddel dat uit een emmer op een gladde vloer wordt gegoten',
        },
    },
    {
        id: 'binnenzonwering',
        name: 'Binnenzonwering',
        group: 'raambekleding',
        summary:
            'Mooie raamdecoratie maakt je interieur helemaal compleet. Van stijlvolle plissés en sfeervolle gordijnen tot rolgordijnen, vouwgordijnen en jaloezieën. Er zijn volop mogelijkheden om jouw ramen perfect aan te laten sluiten bij je woonstijl.',
        photo: {
            src: binnenzonweringPhoto,
            alt: 'Woonkamer met donkerblauwe plissés voor drie grote ramen',
        },
    },
];
