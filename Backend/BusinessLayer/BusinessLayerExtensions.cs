using System.Collections.Generic;
using AutoMapper;
using BusinessLayer.Mappings;
using BusinessLayer.Services.Matches;
using BusinessLayer.Services.Players;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessLayer
{
    public static class BusinessLayerExtensions
    {
        public static IServiceCollection AddBusinessLayer(this IServiceCollection services)
        {
            var profileList = new List<Profile>();
            
            profileList.Add(new MappingPlayers());
            profileList.Add(new MappingMatches());
            
            services.AddScoped<IPlayerService, PlayerService>();
            services.AddScoped<IMatchService, MatchService>();
            
            services.AddAutoMapper(c => 
                c.AddProfiles(profileList), typeof(List<Profile>));
            
            
            return services;
        }
    }
}