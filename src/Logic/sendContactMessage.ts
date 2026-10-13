import { contactEndpoint } from 'src/Config/api';
import type { ContactMessage } from 'src/Definitions/ContactMessage';

// 'not-connected': er is nog geen backend; 'rate-limited': de API gaf 429 (ProblemDetails)
export type SendResult = 'sent' | 'not-connected' | 'rate-limited' | 'failed';

export async function sendContactMessage(message: ContactMessage): Promise<SendResult> {
    if (!contactEndpoint) return 'not-connected';

    try {
        const response = await fetch(contactEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: message.name.trim(),
                email: message.email?.trim() || null,
                phone: message.phone?.trim() || null,
                message: message.message.trim(),
                website: message.website,
            }),
        });

        if (response.ok) return 'sent';
        if (response.status === 429) return 'rate-limited';

        return 'failed';
    } catch {
        return 'failed';
    }
}
