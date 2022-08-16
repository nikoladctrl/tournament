using System.Collections.Generic;
using System.Threading.Tasks;
using Core.DTOs.Players;

namespace BusinessLayer.Services.Players
{
    public interface IPlayerService
    {
        Task<List<PlayerDto>> GetPlayers();
        Task<PlayerDto> GetPlayer(int id);
        Task<PlayerDto> CreatePlayer(CreatePlayerDto createPlayerDto);
        
    }
}