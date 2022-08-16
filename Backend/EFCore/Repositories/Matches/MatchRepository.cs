using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Matches
{
    public class MatchRepository : IMatchRepository
    {
        private readonly DataContext _context;

        public MatchRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Match>> GetMatches()
        {
            return await _context.Matches
                                    .Include(m => m.PlayerOne)
                                    .Include(m => m.PlayerTwo)
                                    .ToListAsync();
        }

        public async Task<Match> GetMatch(int id)
        {
            return await _context.Matches
                                    .Include(m => m.PlayerOne)
                                    .Include(m => m.PlayerTwo)
                                    .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<Match> CreateMatch(Match match)
        {
            _context.Matches.Add(match);
            await _context.SaveChangesAsync();

            return await GetMatch(match.Id);
        }

        public async Task<List<Match>> GetMatchesByPlayerId(int playerId)
        {
            return await _context.Matches
                                    .Include(m => m.PlayerOne)
                                    .Include(m => m.PlayerTwo)
                                    .Where(m => m.PlayerOneId == playerId || m.PlayerTwoId == playerId)
                                    .ToListAsync();
        }
    }
}