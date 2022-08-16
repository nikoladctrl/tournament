using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.DTOs.Players
{
    public class CreatePlayerDto
    {
        [Required]
        public string Name { get; set; }
        [Required] 
        public string Description { get; set; }
    }
}