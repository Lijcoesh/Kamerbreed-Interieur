using System.ComponentModel.DataAnnotations;
using Kamerbreed.API.Validation;

namespace Kamerbreed.API.Commands;

// De grenzen zijn gelijk aan of ruimer dan die in src/Helpers/validateContactMessage.ts
public record AddContactMessage
{
    [Length(1, 100)]
    [NoSurroundingWhitespace]
    [NoControlCharacters]
    public required string Name { get; init; }

    [EmailAddress]
    [MaxLength(254)]
    [NoSurroundingWhitespace]
    [NoControlCharacters]
    public required string? Email { get; init; }

    [Phone]
    [Length(6, 20)]
    [NoSurroundingWhitespace]
    public required string? Phone { get; init; }

    [Length(1, 2000)]
    [NoSurroundingWhitespace]
    public required string Message { get; init; }

    // Honeypot: mensen zien dit veld niet, dus gevuld betekent een bot
    [MaxLength(2000)]
    public required string Website { get; init; }
}
