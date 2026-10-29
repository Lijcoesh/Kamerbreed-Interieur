using Kamerbreed.API.Validation;

namespace Kamerbreed.API.Configuration;

public class ApiOptions
{
    [CidrNotation]
    public string[] TrustedProxyNetworks { get; set; } = [];
}
