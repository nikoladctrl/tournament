using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Matches;
using Core.Entities;
using EFCore.Repositories.Matches;

namespace BusinessLayer.Services.Matches
{
    public class MatchService : IMatchService
    {
        private readonly IMatchRepository _matchRepository;
        private readonly IMapper _mapper;

        public MatchService(IMatchRepository matchRepository, IMapper mapper)
        {
            _matchRepository = matchRepository;
            _mapper = mapper;
        }

        public async Task<List<MatchDto>> GetMatches()
        {
            return _mapper.Map<List<MatchDto>>(await _matchRepository.GetMatches());
        }

        public async Task<MatchDto> GetMatch(int id)
        {
            return _mapper.Map<MatchDto>(await _matchRepository.GetMatch(id));
        }

        public async Task<MatchDto> CreateMatch(CreateMatchDto createMatchDto)
        {
            return _mapper.Map<MatchDto>(await _matchRepository.CreateMatch(_mapper.Map<Match>(createMatchDto)));
        }

        public async Task<List<MatchDto>> GetMatchesByPlayerId(int playerId)
        {
            return _mapper.Map<List<MatchDto>>(await _matchRepository.GetMatchesByPlayerId(playerId));
        }
    }
}