using Kamerbreed.API.Exceptions;
using Kamerbreed.API.Tests.Dummies;
using Kamerbreed.API.Validators;

namespace Kamerbreed.API.Tests.Domain.Validators;

public class ContactMessageValidatorTests
{
    private readonly ContactMessageValidator validator = new();

    [Fact]
    public void ValidateAdd_WithEmailAndPhone_DoesNotThrow()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage();

        // Act
        var exception = Record.Exception(() => validator.ValidateAdd(command));

        // Assert
        Assert.Null(exception);
    }

    [Fact]
    public void ValidateAdd_WithEmailOnly_DoesNotThrow()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(phone: null);

        // Act
        var exception = Record.Exception(() => validator.ValidateAdd(command));

        // Assert
        Assert.Null(exception);
    }

    [Fact]
    public void ValidateAdd_WithPhoneOnly_DoesNotThrow()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(email: null);

        // Act
        var exception = Record.Exception(() => validator.ValidateAdd(command));

        // Assert
        Assert.Null(exception);
    }

    [Fact]
    public void ValidateAdd_WithoutEmailAndPhone_ThrowsBadRequest()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(email: null, phone: null);

        // Act
        var exception = Record.Exception(() => validator.ValidateAdd(command));

        // Assert
        Assert.IsType<BadRequestException>(exception);
    }
}
