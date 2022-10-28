using ClientsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ClientsApi.Context;

public class DataContext : DbContext {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Client> Clients => Set<Client>();

    public DbSet<States> States => Set<States>();

    public DbSet<Cities> Cities => Set<Cities>();

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<Client>().Property(c => c.sex).HasConversion<string>();
    }
}