using System.Net;

namespace Kamerbreed.API.Exceptions;

public class TooManyRequestsException(string message) : DomainException(message)
{
    public override HttpStatusCode StatusCode => HttpStatusCode.TooManyRequests;
}
