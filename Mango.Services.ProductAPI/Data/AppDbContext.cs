using Mango.Services.ProductAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Mango.Services.ProductAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 7,
                Name = "Kiwi",
                Price = 50000,
                Description = "Kiwi Kiwi Kiwi Kiwi.",
                Src = "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 1,
                Name = "Watermelon",
                Price = 65000,
                Description = "Watermelon Watermelon Watermelon Watermelon.",
                Src = "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 2,
                Name = "Cherry",
                Price = 100000,
                Description = "Cherry Cherry Cherry .",
                Src = "https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 3,
                Name = "Avacado",
                Price = 120000,
                Description = "Avacado Avacado Avacado Avacado.",
                Src = "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 4,
                Name = "Apple",
                Price = 80000,
                Description = "Apple Apple Apple Apple.",
                Src = "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });
            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 5,
                Name = "Strawberry",
                Price = 50000,
                Description = "Strawberry Strawberry Strawberry Strawberry.",
                Src = "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });
            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 6,
                Name = "Orange",
                Price = 50000,
                Description = "Orange Orange Orange Orange.",
                Src = "https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            });
        }
    }
}
