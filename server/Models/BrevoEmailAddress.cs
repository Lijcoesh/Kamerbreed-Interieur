using System.Text.Json.Serialization;

namespace Kamerbreed.API.Models;

public record BrevoEmailAddress
{
    public required string Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required string? Name { get; init; }
}
