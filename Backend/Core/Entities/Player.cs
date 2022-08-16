using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("Players")]
    public class Player
    {
        public int Id { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public List<Match> FirstMatches { get; set; }
        public List<Match> SecondMatches { get; set; }
    }
}