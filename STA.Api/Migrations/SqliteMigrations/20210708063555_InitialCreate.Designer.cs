// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using STA.Api.Services;

namespace STA.Api.Migrations.SqliteMigrations
{
    [DbContext(typeof(OrderDbContext))]
    [Migration("20210708063555_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.7");

            modelBuilder.Entity("STA.Api.Services.Setting", b =>
                {
                    b.Property<string>("Key")
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Value")
                        .HasColumnType("varchar(50)");

                    b.HasKey("Key");

                    b.ToTable("Settings");
                });
#pragma warning restore 612, 618
        }
    }
}
