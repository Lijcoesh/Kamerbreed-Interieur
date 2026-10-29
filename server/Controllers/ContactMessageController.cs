using Kamerbreed.API.Commands;
using Kamerbreed.API.Configuration;
using Kamerbreed.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace Kamerbreed.API.Controllers;

[ApiController]
[Route("api/contact-messages")]
public class ContactMessageController(IContactMessageService contactMessageService) : ControllerBase
{
    [HttpPost]
    [EnableRateLimiting(RateLimitOptions.ContactMessagePolicy)]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status429TooManyRequests)]
    public async Task AddContactMessage(AddContactMessage command, CancellationToken cancellationToken)
    {
        await contactMessageService.AddContactMessageAsync(command, cancellationToken);
    }
}
