using System.Collections.Generic;
using System.Threading.Tasks;
using Core.DTOs.Matches;
using Core.Entities;

namespace BusinessLayer.Services.Matches
{
    public interface IMatchService
    {
        Task<List<MatchDto>> GetMatches();
        Task<MatchDto> GetMatch(int id);
        Task<MatchDto> CreateMatch(CreateMatchDto createMatchDto);
        Task<List<MatchDto>> GetMatchesByPlayerId(int playerId);
    }
}