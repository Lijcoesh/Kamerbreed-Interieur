using Kamerbreed.API.Configuration;
using Kamerbreed.API.Exceptions;
using Kamerbreed.API.Interfaces;
using Kamerbreed.API.Services;
using Kamerbreed.API.Tests.Dummies;
using Kamerbreed.API.Tests.Fixtures;
using Microsoft.Extensions.Options;
using Moq;

namespace Kamerbreed.API.Tests.Domain.Services;

public class ContactMessageServiceTests
{
    private const string Recipient = "info@example.com";

    private readonly Mock<IContactMessageValidator> contactMessageValidatorMock = new();
    private readonly Mock<IBrevoEmailService> brevoEmailServiceMock = new();
    private readonly FakeLogger<ContactMessageService> logger = new();

    [Fact]
    public async Task AddContactMessageAsync_WhenValidationFails_ThrowsBadRequestWithoutSending()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(email: null, phone: null);

        contactMessageValidatorMock
            .Setup(v => v.ValidateAdd(command))
            .Throws(new BadRequestException("A contact message needs an email address or a phone number"));

        var service = CreateService();

        // Act
        await Assert.ThrowsAsync<BadRequestException>(
            () => service.AddContactMessageAsync(command, CancellationToken.None));

        // Assert
        VerifyNothingSent();
    }

    [Fact]
    public async Task AddContactMessageAsync_WithEmail_SendsToRecipientWithReplyToVisitor()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage();
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(
                Recipient,
                Dummy.Email,
                It.Is<string>(subject => subject.Contains(command.Name)),
                It.Is<string>(text => text.Contains(Dummy.Phone) && text.Contains(Dummy.Email) && text.Contains(command.Message)),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task AddContactMessageAsync_WithPhoneOnly_SendsWithoutReplyTo()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(email: null);
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(
                Recipient,
                null,
                It.IsAny<string>(),
                It.Is<string>(text => text.Contains(Dummy.Phone)),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task AddContactMessageAsync_WithFilledHoneypot_SucceedsWithoutSending()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(website: "https://spam.example.com");
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        VerifyNothingSent();
        Assert.DoesNotContain(logger.Entries, e => e.Message.Contains(command.Message) || e.Message.Contains(Dummy.Email));
    }

    private void VerifyNothingSent()
    {
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(It.IsAny<string>(), It.IsAny<string?>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<CancellationToken>()),
            Times.Never);
    }

    private ContactMessageService CreateService()
    {
        return new ContactMessageService(
            contactMessageValidatorMock.Object,
            brevoEmailServiceMock.Object,
            Options.Create(new MailOptions { ContactMessageRecipient = Recipient }),
            logger);
    }
}
