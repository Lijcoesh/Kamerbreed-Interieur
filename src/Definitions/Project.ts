import type { ServiceId } from './Service';

// Een opgeleverd project. Staat onder elke soort die in `services` staat.
export interface Project {
    id: string;
    title: string;
    services: ServiceId[];
    text: string;
    // Ontbreekt zolang de PO de foto nog niet heeft gestuurd; dan toont de pagina een placeholder
    photo?: {
        src: string;
        alt: string;
    };
}
