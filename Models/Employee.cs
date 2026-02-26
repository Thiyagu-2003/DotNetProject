using System.ComponentModel.DataAnnotations;

namespace dotnetapi.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }
}