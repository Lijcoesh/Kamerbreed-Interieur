// Diensten. Projecten verwijzen hiernaar, zodat er later op dienst gefilterd kan worden.
export type ServiceId = 'pvc' | 'laminaat' | 'vloerbedekking' | 'tapijt' | 'binnenzonwering';

export interface Service {
    id: ServiceId;
    name: string;
    // Vloeren zijn de hoofdzaak; binnenzonwering komt erbij
    group: 'vloeren' | 'raambekleding';
    summary: string;
}
