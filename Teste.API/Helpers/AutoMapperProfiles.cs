using System.Linq;
using AutoMapper;
using Teste.API.DTOs;
using Teste.Domain;
using Teste.Domain.Identity;

namespace Teste.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Task,TaskDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDto>().ReverseMap();
        }
    }
}