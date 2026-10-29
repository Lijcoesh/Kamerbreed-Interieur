// Bedrijfsgegevens. Eén plek, zodat appbar, footer en contactknoppen hetzelfde tonen.

export const companyName = 'Kamerbreed Interieur';
export const slogan = 'Thuis kiezen en u thuis voelen!';
export const region = 'Westland';

// Naam van de eigenaar, zoals de PO hem in zijn tekst voor Over mij schrijft (28-10-2026)
export const ownerName = 'Jeroen van der Eijk';

export const phoneDisplay = '06-22243488';
export const phoneHref = 'tel:+31622243488';

export const email = 'info@kamerbreedinterieur.nl';
export const emailHref = `mailto:${email}`;

// TODO: WhatsApp staat uit tot de PO bevestigt dat het op dit nummer kan (Gesprek-PO.md, vraag 3).
// Zet hier het nummer in internationale vorm zonder + of spaties ('31622243488') om de knop te tonen.
export const whatsappNumber: string | null = null;

// Kernen van de gemeente Westland. TODO: laten bevestigen dat hij overal komt.
export const serviceArea = [
    'Naaldwijk',
    'Wateringen',
    "'s-Gravenzande",
    'Monster',
    'De Lier',
    'Maasdijk',
    'Honselersdijk',
    'Poeldijk',
    'Kwintsheul',
    'Ter Heijde',
    'Heenweg',
];

// Account kamer.breed.interieur (PO, 28-10-2026). Alleen een link, geen ingesloten feed.
export const instagramUrl: string | null = 'https://www.instagram.com/kamer.breed.interieur/';

// TODO: KvK-nummer laten bevestigen door de PO; gevonden via Drimble, klopt volgens kvk.nl.
export const kvkNumber = '27067893';
// Van de PO (28-10-2026)
export const vatNumber: string | null = 'NL803473655B01';
