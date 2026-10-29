using System.ComponentModel.DataAnnotations;

namespace Kamerbreed.API.Configuration;

public class MailOptions
{
    [Required]
    [EmailAddress]
    public required string ContactMessageRecipient { get; set; }
}
