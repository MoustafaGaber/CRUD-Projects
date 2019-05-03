using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BooksApi.models
{
    public partial class BooksDBContext : DbContext
    {
        
        public BooksDBContext(DbContextOptions<BooksDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Book { get; set; }

       
    }
}
