using Kamerbreed.API.Commands;

namespace Kamerbreed.API.Tests.Dummies;

public static class Dummy
{
    public const string Email = "klant@example.com";

    public const string Phone = "0612345678";

    public static AddContactMessage CreateAddContactMessage(string? email = Email, string? phone = Phone, string website = "")
    {
        return new AddContactMessage
        {
            Name = "Jan de Vries",
            Email = email,
            Phone = phone,
            Message = "Ik wil graag nieuwe vloer in de woonkamer.",
            Website = website,
        };
    }
}
