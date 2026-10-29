# Backend-conventies (`server/`)

ASP.NET Core (.NET 10) met Controllers. De API ontvangt het contactformulier en verstuurt het als mail via Brevo; er is geen database en geen auth. Overgenomen van de API van WaterZacht (`F:/Development/Martin/server`), die op zijn beurt de conventies van UpNext.API volgt zonder database, auth en NSwag.

| Commando (in `server/`) | Doel |
|---|---|
| `dotnet run --launch-profile http` | API op poort 5082; `npm run dev` proxyt `/api` daarheen |
| `dotnet build -warnaserror` | Bouwen zoals CI (`.github/workflows/server.yml`) |
| `dotnet test` | Tests |
| `dotnet user-secrets set "Brevo:ApiKey" "<key>"` | Lokaal ook `Brevo:SenderEmail`; zonder start de API niet |

Op de VPS komen secrets uit environment variables (`Brevo__ApiKey`), nooit uit een gecommit config-bestand.

## Structuur

Layer-first: één map per technische rol, de feature is de bestandsnaam-prefix. Een map wordt pas aangemaakt als er iets in hoort.

`Controllers/`, `Commands/` (request-modellen), `Models/` (DTO's van externe API's, met de API als prefix: `BrevoEmail`), `Services/`, `Validators/`, `Interfaces/` (alle interfaces, niet naast de implementatie), `Configuration/` (Options), `Constants/` (`<Feature>Constants`), `Enums/`, `Exceptions/`, `Middleware/`, `Extensions/`, `Validation/` (eigen `ValidationAttribute`s). Tests in `server/Kamerbreed.API.Tests/`.

## Lagen

- **Controllers**: route, rate-limit policy, request doorgeven. Geen logica.
- **Services**: roepen eerst hun Validator aan, dan de mail.
- **Validators**: regels over meerdere velden (e-mail óf telefoon), één `Validate<Actie>` per Service-methode (`ValidateAdd`). Zonder I/O zijn ze synchroon. Ze gooien een `DomainException`. Formaatchecks horen op het Command.
- Elke Service en Validator heeft een interface en wordt in `Program.cs` geregistreerd met `AddTransient`.
- Een externe HTTP-API is een typed client met base-URL en timeouts uit zijn Options-class (`BrevoEmailService`). Retry alleen op 429, niet op 5xx of na een timeout: de mail kan dan al verstuurd zijn.

## Endpoints en Commands

- `POST api/<feature>s` met een `Add<Feature>`-Command. De actie en Service-methode heten zoals het Command (`AddContactMessage` → `AddContactMessageAsync`), geven `Task` zonder body terug en hebben een `CancellationToken` als laatste parameter.
- Elke actie: `[ProducesResponseType]` voor 200 en elke foutcode die hij kan geven.
- Geen publieke id op een `Add`-Command: zonder opslag is er niets om een retry mee tegen te houden.
- Alle properties zijn `required`, ook optionele (`required T?`). De frontend stuurt een leeg optioneel veld als `null`, niet als `""`. Validatie per type:

| Veld | Attributen |
|---|---|
| tekst | `[Length]`/`[MaxLength]` + `[NoSurroundingWhitespace]`; de frontend trimt, de API weigert |
| tekst op één regel (komt in een onderwerp of adresregel) | daarnaast `[NoControlCharacters]` |
| e-mail / telefoon | `[EmailAddress]` + `[MaxLength(254)]` / `[Phone]` + `[Length]` |
| getal / enum | `[AllowedValues]` of `[Range]` / `[EnumDataType]` |

- De grenzen zijn gelijk aan of ruimer dan die van de frontend (`src/Helpers/validateContactMessage.ts`). Wijzig ze samen.
- Honeypot (`Website`): gevuld → de Service stuurt niets en geeft gewoon een 200, zodat een bot niet merkt dat het niet aankwam.
- JSON via System.Text.Json. Komen er enums, dan als camelCase-string over de lijn (`JsonStringEnumConverter` met `allowIntegerValues: false`).

## Fouten en configuratie

- `Exceptions/`: `DomainException` met statuscode. `ExceptionHandlingMiddleware` maakt er `ProblemDetails` van en staat als eerste in de pipeline. Messages zijn Engels en bevatten geen persoonsgegevens.
- Instellingen via een Options-class met `ValidateDataAnnotations()` en `ValidateOnStart()`, gelezen via `IOptions<T>`. Het ontvangstadres staat in `Mail` (`appsettings.json`).

## Rate limiting

- Token bucket via `RateLimitOptions.CreateTokenBucket`, per IP (`ToRateLimitPartitionKey()`, IPv6 per /64). Elk endpoint heeft een eigen policy.
- Komt er ooit een mail naar een adres dat de bezoeker zelf invult (een bevestiging), dan daarnaast een limiet per e-mailadres in de Service, zoals `ISaltOrderEmailLimiter` in WaterZacht. Anders mailbomt iemand vanaf veel IP's een vreemde via onze afzender.
- Achter Caddy: zet het netwerk van de proxy in `Api:TrustedProxyNetworks` (bv. `127.0.0.1/32`). Zonder die instelling deelt iedereen het IP van de proxy, en dus één limiet. Zet `ASPNETCORE_FORWARDEDHEADERS_ENABLED` niet.
- Geen CORS: de site en de API staan op hetzelfde adres (Caddy stuurt `/api` door).

## Mail en privacy

- De mail aan Kamerbreed heeft de bezoeker als reply-to, als die een e-mailadres gaf.
- Faalt de mail, dan krijgt de client een 500 en toont het formulier telefoon en e-mail.
- De privacyverklaring zegt dat de website niets opslaat: geen database, geen berichten op schijf. Log nooit formulierinhoud, e-mailadressen of IP-adressen, en zet in Caddy geen toegangslog aan. Wijzig je dit, pas dan `/privacy` aan.

## C#-stijl

- Namespace `Kamerbreed.API.<Map>`. PascalCase voor types, members en `const`; `Async`-suffix.
- Usings: eerst `System.*`, dan de rest op alfabet (StyleCop SA1210).
- Een witregel tussen alle members; attributen direct boven hun member. StyleCop controleert geen `record`s, dus daar zelf op letten.
- Services en Validators gebruiken een klassieke constructor met `_camelCase`-fields, en een `if` met één statement zonder braces. Controllers en Middleware gebruiken primary constructors.
- Geen expression-bodied methods of constructors. Een get-only property mag wel (`StatusCode => ...`).
- Zo min mogelijk comments: alleen voor een valkuil op precies die plek. Een `!` krijgt een `// ! <reden>` erboven.
- Analyzers (StyleCop, Roslynator, Sonar, Nullable.Extended) staan aan. Regels die tegen deze conventies ingaan, staan uit in `server/.editorconfig`.

## Testen

- xUnit + Moq: `Domain/Services/`, `Domain/Validators/`, `Fixtures/` (`FakeHttpMessageHandler`, `FakeLogger`) en `Dummies/Dummy`.
- Mock alleen interfaces. Een externe HTTP-API test je met `FakeHttpMessageHandler`.
- Arrange-Act-Assert met commentaar-blokjes, naam `Method_Scenario_ExpectedResult`, één scenario per test. Het happy path en elke `DomainException` krijgen een eigen test.
