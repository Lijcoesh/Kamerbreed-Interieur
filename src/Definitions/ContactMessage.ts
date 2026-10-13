// Wat het contactformulier verstuurt. Komt overeen met het Command van de backend in /server (nog te bouwen).
export interface ContactMessage {
    name: string;
    email: string | null;
    phone: string | null;
    message: string;
    // Honeypot: mensen zien dit veld niet; is het gevuld, dan is het een bot
    website: string;
}

export type ContactField = 'name' | 'email' | 'phone' | 'message';

// 'contact': geen e-mailadres en geen telefoonnummer; hoort bij de groep, niet bij één veld
export type ContactErrors = Partial<Record<ContactField | 'contact', string>>;
