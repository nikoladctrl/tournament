using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLayer.Services.Players;
using Core.DTOs.Players;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PlayersController : BaseApiController
    {
        private readonly IPlayerService _playerService;

        public PlayersController(IPlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public async Task<ActionResult<List<PlayerDto>>> GetPlayers()
        {
            var players = await _playerService.GetPlayers();

            return (players == null) ? NotFound() : Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PlayerDto>> GetPlayer([FromRoute] int id)
        {
            var player = await _playerService.GetPlayer(id);

            return (player == null) ? NotFound() : Ok(player);
        }

        [HttpPost]
        public async Task<ActionResult<PlayerDto>> CreatePlayer([FromBody] CreatePlayerDto createPlayerDto)
        {
            var player = await _playerService.CreatePlayer(createPlayerDto);

            return (player == null) ? NotFound() : Created("Player is successfully created!", player);
        }
    }
}