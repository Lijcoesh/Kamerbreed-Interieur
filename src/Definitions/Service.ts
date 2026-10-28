import type { PhotoSource } from './PhotoSource';

// Diensten, zoals ze op Home staan
export type ServiceId =
    'pvc' | 'tapijt' | 'houten-vloeren' | 'laminaat' | 'egaliseren' | 'binnenzonwering';

export interface Service {
    id: ServiceId;
    name: string;
    // Vloeren zijn de hoofdzaak; binnenzonwering komt erbij
    group: 'vloeren' | 'raambekleding';
    summary: string;
    // Sfeerbeeld bij de dienst op Home
    photo?: PhotoSource;
}
