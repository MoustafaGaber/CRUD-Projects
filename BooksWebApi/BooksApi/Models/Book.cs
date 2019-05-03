using System;
using System.Collections.Generic;

namespace BooksApi.models
{
    public partial class Book
    {
        public int id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public int? numberofpages { get; set; }
        public DateTime? publishedat { get; set; }
    }
}
