using System.ComponentModel.DataAnnotations;

namespace Mango.Services.ProductAPI.Models.Dto
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public bool InCart { get; set; }
        public string Description { get; set; }
        public string Src { get; set; }
    }
}
