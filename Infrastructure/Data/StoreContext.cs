using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
            if (options is null)
            {
                throw new System.ArgumentNullException(nameof(options));
            }
        }

        public DbSet<Product> Products { get; set; }       
    }
}