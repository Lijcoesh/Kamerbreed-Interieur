using Kamerbreed.API.Commands;

namespace Kamerbreed.API.Interfaces;

public interface IContactMessageService
{
    Task AddContactMessageAsync(AddContactMessage command, CancellationToken cancellationToken);
}
