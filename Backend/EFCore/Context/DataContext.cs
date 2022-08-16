using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Player> Players { get; set; }
        public DbSet<Match> Matches { get; set; }
        
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.PlayerOne)
                .WithMany(p => p.FirstMatches)
                .HasForeignKey(m => m.PlayerOneId)
                .HasPrincipalKey(m => m.Id);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.PlayerTwo)
                .WithMany(p => p.SecondMatches)
                .HasForeignKey(m => m.PlayerTwoId)
                .HasPrincipalKey(m => m.Id);

            modelBuilder.Entity<Player>()
                .HasIndex(p => p.Name)
                .IsUnique();
        }
    }
}