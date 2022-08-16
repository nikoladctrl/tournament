using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace EFCore.Repositories.Matches
{
    public interface IMatchRepository
    {
        Task<List<Match>> GetMatches();
        Task<Match> GetMatch(int id);
        Task<Match> CreateMatch(Match match);
        Task<List<Match>> GetMatchesByPlayerId(int playerId);
    }
}