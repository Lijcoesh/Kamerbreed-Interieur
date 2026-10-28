import type { PhotoSource } from './PhotoSource';

// Diensten. Projecten verwijzen hiernaar, zodat er later op dienst gefilterd kan worden.
export type ServiceId =
    'pvc' | 'tapijt' | 'houten-vloeren' | 'laminaat' | 'egaliseren' | 'binnenzonwering';

export interface Service {
    id: ServiceId;
    name: string;
    // Vloeren zijn de hoofdzaak; binnenzonwering komt erbij
    group: 'vloeren' | 'raambekleding';
    summary: string;
    // Sfeerbeeld bij de dienst op Home, los van de projecten
    photo?: PhotoSource;
}
