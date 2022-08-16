using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace EFCore.Repositories.Players
{
    public interface IPlayerRepository
    {
        Task<List<Player>> GetPlayers();
        Task<Player> GetPlayer(int id);
        Task<Player> CreatePlayer(Player player);
        
    }
}