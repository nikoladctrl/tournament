using Core.DTOs.Players;

namespace Core.DTOs.Matches
{
    public class MatchDto
    {
        public int Id { get; set; }
        public int PlayerOneId { get; set; }
        public PlayerDto PlayerOne { get; set; }
        public int PlayerTwoId { get; set; }
        public PlayerDto PlayerTwo { get; set; }
        public string Result { get; set; }
    }
}