using AutoMapper;
using Core.DTOs.Matches;
using Core.Entities;

namespace BusinessLayer.Mappings
{
    public class MappingMatches : Profile
    {
        public MappingMatches()
        {
            CreateMap<CreateMatchDto, Match>();
            CreateMap<Match, MatchDto>();
            CreateMap<Match, int>().ConvertUsing(src => src.Id);
        }
    }
}