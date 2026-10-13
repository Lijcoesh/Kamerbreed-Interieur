import type { Service } from 'src/Definitions/Service';

// Namen bevestigd door de PO; de omschrijvingen schrijft hij zelf (tot die tijd lorem ipsum).
export const services: Service[] = [
    {
        id: 'pvc',
        name: 'Pvc-vloeren',
        group: 'vloeren',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    },
    {
        id: 'tapijt',
        name: 'Tapijt',
        group: 'vloeren',
        summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        id: 'laminaat',
        name: 'Laminaat',
        group: 'vloeren',
        summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        id: 'vloeronderhoud',
        name: 'Vloeronderhoud',
        group: 'vloeren',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
        id: 'binnenzonwering',
        name: 'Binnenzonwering',
        group: 'raambekleding',
        summary:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
];
