using System;
using EFCore.Context;
using EFCore.Repositories.Matches;
using EFCore.Repositories.Players;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EFCore
{
    public static class EFCoreExtensions
    {
        public static IServiceCollection AddEFCore(
            this IServiceCollection services,
            Action<DbContextOptionsBuilder> dboptions,
            ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            
            services.AddDbContext<DataContext>(dboptions, ServiceLifetime.Transient);

            services.AddScoped<IPlayerRepository, PlayerRepository>();
            services.AddScoped<IMatchRepository, MatchRepository>();

            return services;
        }
    }
}