using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLayer.Services.Matches;
using Core.DTOs.Matches;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class MatchesController : BaseApiController
    {
        private readonly IMatchService _matchService;

        public MatchesController(IMatchService matchService)
        {
            _matchService = matchService;
        }

        [HttpGet]
        public async Task<ActionResult<List<MatchDto>>> GetMatches()
        {
            var matches = await _matchService.GetMatches();

            return (matches == null) ? NotFound() : Ok(matches);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MatchDto>> GetMatch([FromRoute] int id)
        {
            var match = await _matchService.GetMatch(id);

            return (match == null) ? NotFound() : Ok(match);
        }

        [HttpGet("by-player/{playerId}")]
        public async Task<ActionResult<List<MatchDto>>> GetMatchesByPlayerId([FromRoute] int playerId)
        {
            var matches = await _matchService.GetMatchesByPlayerId(playerId);

            return (matches == null) ? NotFound() : Ok(matches);
        }

        [HttpPost]
        public async Task<ActionResult<MatchDto>> CreateMatch([FromBody] CreateMatchDto createMatchDto)
        {
            var match = await _matchService.CreateMatch(createMatchDto);

            return (match == null) ? NotFound() : Created("Match is successfully created!", match);
        }
    }
}