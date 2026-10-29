// De API in /server. Op de VPS serveert Caddy de site en /api op hetzelfde adres; in development
// stuurt de Vite-proxy /api door naar `dotnet run`. De demo op GitHub Pages (BASE_PATH gezet) heeft
// geen API: daar verstuurt het formulier niets en meldt het dat bezoekers moeten bellen of mailen.
export const contactEndpoint: string | null =
    import.meta.env.BASE_URL === '/' ? '/api/contact-messages' : null;
