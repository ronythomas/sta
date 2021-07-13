using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace STA.Api.Services
{    
    public class OrderDbContext : DbContext
    {
        public OrderDbContext(DbContextOptions<OrderDbContext> options) : base(options) { }

        public DbSet<Setting> Settings { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Setting>().ToTable("Settings");
        //}
    }

    public class Setting
    {
        [Key]
        [Column(TypeName = "varchar(10)")]
        public string Key { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string Value { get; set; }
    }
}
