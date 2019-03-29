using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string  Username { get; set; }
       
        [Required]
         [StringLength(8, ErrorMessage = "Passwors must be 8 to 4 characters", MinimumLength = 4)]
        public string  Password { get; set; }
    }
}