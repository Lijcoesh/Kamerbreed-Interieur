import type { Project } from 'src/Definitions/Project';

// Alle projecten op één plek; nieuwste bovenaan. Home toont de eerste drie, Projecten groepeert per soort.
// Houten vloeren en egaliseren hebben nog geen placeholderproject.
// Een project met meer diensten staat onder elke soort.
// TODO: dit zijn placeholders tot de PO foto's, titels en teksten stuurt (Gesprek-PO.md, vraag 5).
// Nog zonder foto: daar staat "Projectfoto volgt". Alleen echte foto's van zijn werk, geen sfeerbeelden.
// Geen klantnamen, huisnummers of herkenbare personen; plaats in het Westland mag.
export const projects: Project[] = [
    {
        id: 'pvc-1',
        title: 'Voorbeeldproject 1',
        services: ['pvc'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 'laminaat-1',
        title: 'Voorbeeldproject 1',
        services: ['laminaat'],
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 'tapijt-1',
        title: 'Voorbeeldproject 1',
        services: ['tapijt'],
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
    {
        id: 'binnenzonwering-1',
        title: 'Voorbeeldproject 1',
        services: ['binnenzonwering'],
        text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
    },
    {
        id: 'tapijt-3',
        title: 'Voorbeeldproject 3',
        services: ['tapijt'],
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
    },
    {
        id: 'pvc-2',
        title: 'Voorbeeldproject 2',
        services: ['pvc'],
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 'laminaat-2',
        title: 'Voorbeeldproject 2',
        services: ['laminaat'],
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
        id: 'tapijt-2',
        title: 'Voorbeeldproject 2',
        services: ['tapijt'],
        text: 'Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi.',
    },
    {
        id: 'binnenzonwering-2',
        title: 'Voorbeeldproject 2',
        services: ['binnenzonwering'],
        text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.',
    },
    {
        id: 'tapijt-4',
        title: 'Voorbeeldproject 4',
        services: ['tapijt'],
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
        id: 'pvc-3',
        title: 'Voorbeeldproject 3',
        services: ['pvc'],
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 'laminaat-3',
        title: 'Voorbeeldproject 3',
        services: ['laminaat'],
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
];
