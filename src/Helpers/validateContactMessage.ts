import type { ContactErrors, ContactMessage } from 'src/Definitions/ContactMessage';

// Grenzen van het formulier. De backend krijgt dezelfde of ruimere grenzen,
// zodat een bezoeker nooit een 400 krijgt voor iets wat de frontend goedkeurt.
export const contactLimits = {
    name: 100,
    email: 254,
    phone: 20,
    message: 2000,
};

// Eén @, iets ervoor, een domein met een punt erin, geen spaties
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Cijfers met eventueel +, spaties, streepjes en haakjes; 10 tot 15 cijfers
const phoneCharacters = /^\+?[\d\s\-()]+$/;

export function validateContactMessage(input: ContactMessage): ContactErrors {
    const errors: ContactErrors = {};

    const name = input.name.trim();
    const email = input.email?.trim() ?? '';
    const phone = input.phone?.trim() ?? '';
    const message = input.message.trim();

    if (!name) {
        errors.name = 'Vul je naam in.';
    } else if (name.length > contactLimits.name) {
        errors.name = `Je naam mag maximaal ${contactLimits.name} tekens zijn.`;
    }

    if (email && (email.length > contactLimits.email || !emailPattern.test(email))) {
        errors.email =
            'Dit e-mailadres klopt niet. Controleer het, bijvoorbeeld naam@voorbeeld.nl.';
    }

    if (phone) {
        const digits = phone.replace(/\D/g, '');

        if (
            phone.length > contactLimits.phone ||
            !phoneCharacters.test(phone) ||
            digits.length < 10 ||
            digits.length > 15
        ) {
            errors.phone =
                'Dit telefoonnummer klopt niet. Gebruik alleen cijfers, bijvoorbeeld 06 12345678.';
        }
    }

    if (!email && !phone) {
        errors.contact = 'Vul je e-mailadres of telefoonnummer in, dan kan ik reageren.';
    }

    if (!message) {
        errors.message = 'Schrijf kort waar je vraag over gaat.';
    } else if (message.length > contactLimits.message) {
        errors.message = `Je bericht mag maximaal ${contactLimits.message} tekens zijn.`;
    }

    return errors;
}
