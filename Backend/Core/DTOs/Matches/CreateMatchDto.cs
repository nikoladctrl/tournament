namespace Core.DTOs.Matches
{
    public class CreateMatchDto
    {
        public int PlayerOneId { get; set; }
        public int PlayerTwoId { get; set; }
        public string Result { get; set; }
    }
}