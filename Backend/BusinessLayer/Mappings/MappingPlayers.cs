using System;
using AutoMapper;
using Core.DTOs.Players;
using Core.Entities;

namespace BusinessLayer.Mappings
{
    public class MappingPlayers : Profile
    {
        public MappingPlayers()
        {
            CreateMap<CreatePlayerDto, Player>();
            CreateMap<Player, PlayerDto>()
                .ForMember(dest => dest.Won, 
                    opt => opt.MapFrom(
                        src => CalculateWonSets(src)
                    )
                );
        }

        private int CalculateWonSets(Player player)
        {
            var setsWon = 0;

            for (var i = 0; i < player.FirstMatches.Count; i++)
            {
                var result = player.FirstMatches[i].Result;
                setsWon += Int32.Parse(
                    result.Substring(
                        0, result.IndexOf(':')
                    )
                );
            }

            for (var i = 0; i < player.SecondMatches.Count; i++)
            {
                var result = player.SecondMatches[i].Result;
                setsWon += Int32.Parse(
                    result.Substring(result.IndexOf(':')+1, result.IndexOf(';') - result.IndexOf(':') - 1)
                );
            }

            return setsWon;
        }
    }
}

// for (var i = 0; i < FirstMatches.Length; i++)
// {
//     var result = FirstMatches[i];
//     Console.WriteLine();
// }
