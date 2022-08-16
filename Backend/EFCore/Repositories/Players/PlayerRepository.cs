using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Players
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly DataContext _context;

        public PlayerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Player>> GetPlayers()
        {
            return await _context.Players
                .Include(p => p.FirstMatches)
                .Include(p => p.SecondMatches)
                .ToListAsync();
        }

        public async Task<Player> GetPlayer(int id)
        {
            return await _context.Players
                .Include(p => p.FirstMatches)
                .Include(p => p.SecondMatches)
                .FirstOrDefaultAsync(p => p.Id == id);

        }

        public async Task<Player> CreatePlayer(Player player)
        {
            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return await GetPlayer(player.Id);
        }
    }
}