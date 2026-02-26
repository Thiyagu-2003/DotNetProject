using Microsoft.AspNetCore.Mvc;
using dotnetapi.Data;
using dotnetapi.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return Ok(employee);
        }
    }
}