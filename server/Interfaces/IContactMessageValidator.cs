using Kamerbreed.API.Commands;

namespace Kamerbreed.API.Interfaces;

public interface IContactMessageValidator
{
    void ValidateAdd(AddContactMessage command);
}
