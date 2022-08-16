using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("Matches")]
    public class Match
    {
        public int Id { get; set; }
        [Required]
        public int PlayerOneId { get; set; }
        [Required]
        public Player PlayerOne { get; set; }
        [Required]
        public int PlayerTwoId { get; set; }
        [Required]
        public Player PlayerTwo { get; set; }
        [Required]
        public string Result { get; set; }
    }
}