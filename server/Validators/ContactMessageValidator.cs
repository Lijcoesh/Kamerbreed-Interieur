using Kamerbreed.API.Commands;
using Kamerbreed.API.Exceptions;
using Kamerbreed.API.Interfaces;

namespace Kamerbreed.API.Validators;

public class ContactMessageValidator : IContactMessageValidator
{
    public void ValidateAdd(AddContactMessage command)
    {
        if (command.Email is null && command.Phone is null)
            throw new BadRequestException("A contact message needs an email address or a phone number");
    }
}
