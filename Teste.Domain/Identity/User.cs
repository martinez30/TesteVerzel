using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Teste.Domain.Identity
{
    public class User : IdentityUser<int>
    {
        public List<UserRole> UserRoles {get;set;} 
    }
}