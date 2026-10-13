import type { Service } from 'src/Definitions/Service';

// Namen en volgorde bevestigd (13-10-2026); de omschrijvingen schrijft de PO zelf (tot die tijd lorem ipsum).
export const services: Service[] = [
    {
        id: 'pvc',
        name: 'Pvc-vloeren',
        group: 'vloeren',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    },
    {
        id: 'laminaat',
        name: 'Laminaat',
        group: 'vloeren',
        summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        id: 'vloerbedekking',
        name: 'Vloerbedekking',
        group: 'vloeren',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
        id: 'tapijt',
        name: 'Tapijt',
        group: 'vloeren',
        summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        id: 'binnenzonwering',
        name: 'Binnenzonwering',
        group: 'raambekleding',
        summary:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
];
