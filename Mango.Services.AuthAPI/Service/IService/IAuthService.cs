using Mango.Services.AuthAPI.Data.Dto;

namespace Mango.Services.AuthAPI.Service.IService
{
    public interface IAuthService
    {
        Task<string> Register(RegistrationRequestDto requestDto);
        Task<LoginResponseDto> Login(LoginRequestDto requestDto);
        Task<bool> AssignRole(string email, string roleName);

    }
}
