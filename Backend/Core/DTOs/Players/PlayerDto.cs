using System.Collections.Generic;

namespace Core.DTOs.Players
{
    public class PlayerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<int> FirstMatches { get; set; }
        public List<int> SecondMatches { get; set; }
        public int Won { get; set; }
    }
}