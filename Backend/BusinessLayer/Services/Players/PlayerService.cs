using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Players;
using Core.Entities;
using EFCore.Repositories.Players;

namespace BusinessLayer.Services.Players
{
    public class PlayerService : IPlayerService
    {
        private readonly IPlayerRepository _playerRepository;
        private readonly IMapper _mapper;

        public PlayerService(IPlayerRepository playerRepository, IMapper mapper)
        {
            _playerRepository = playerRepository;
            _mapper = mapper;
        }

        public async Task<List<PlayerDto>> GetPlayers()
        {
            return SortBySetsWon(_mapper.Map<List<PlayerDto>>(await _playerRepository.GetPlayers()));
        }

        public async Task<PlayerDto> GetPlayer(int id)
        {
            return _mapper.Map<PlayerDto>(await _playerRepository.GetPlayer(id));
        }

        public async Task<PlayerDto> CreatePlayer(CreatePlayerDto createPlayerDto)
        {
            return _mapper.Map<PlayerDto>(await _playerRepository.CreatePlayer(_mapper.Map<Player>(createPlayerDto)));
        }

        private List<PlayerDto> SortBySetsWon(List<PlayerDto> players)
        {
            players.Sort((player1, player2) => player2.Won.CompareTo(player1.Won));
            return players;
        }
    }
}