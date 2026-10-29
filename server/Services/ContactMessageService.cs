using Kamerbreed.API.Commands;
using Kamerbreed.API.Configuration;
using Kamerbreed.API.Interfaces;
using Microsoft.Extensions.Options;

namespace Kamerbreed.API.Services;

public class ContactMessageService : IContactMessageService
{
    private const string Missing = "-";

    private readonly IContactMessageValidator _contactMessageValidator;
    private readonly IBrevoEmailService _brevoEmailService;
    private readonly IOptions<MailOptions> _mailOptions;
    private readonly ILogger<ContactMessageService> _logger;

    public ContactMessageService(
        IContactMessageValidator contactMessageValidator,
        IBrevoEmailService brevoEmailService,
        IOptions<MailOptions> mailOptions,
        ILogger<ContactMessageService> logger)
    {
        _contactMessageValidator = contactMessageValidator;
        _brevoEmailService = brevoEmailService;
        _mailOptions = mailOptions;
        _logger = logger;
    }

    public async Task AddContactMessageAsync(AddContactMessage command, CancellationToken cancellationToken)
    {
        _contactMessageValidator.ValidateAdd(command);

        // een bot krijgt gewoon een 200, zodat hij niet merkt dat er niets verstuurd is
        if (command.Website.Length > 0)
        {
            _logger.LogInformation("Contact message ignored: honeypot field was filled");
            return;
        }

        var subject = $"Contactformulier: {command.Name}";
        var textContent = $"""
            Naam: {command.Name}
            Telefoon: {command.Phone ?? Missing}
            E-mail: {command.Email ?? Missing}

            Bericht:
            {command.Message}
            """;

        await _brevoEmailService.SendAsync(_mailOptions.Value.ContactMessageRecipient, command.Email, subject, textContent, cancellationToken);
    }
}
