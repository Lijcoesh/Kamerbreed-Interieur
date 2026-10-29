using System.Net;

namespace Kamerbreed.API.Exceptions;

public class BadRequestException(string message) : DomainException(message)
{
    public override HttpStatusCode StatusCode => HttpStatusCode.BadRequest;
}
