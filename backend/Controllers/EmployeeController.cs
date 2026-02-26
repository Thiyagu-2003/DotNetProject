using Microsoft.AspNetCore.Mvc;
using dotnetapi.Data;
using dotnetapi.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapi.Controllers
{
    [ApiController]
    [Route("api/employees")]
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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, Employee employee)
        {
            var existing = await _context.Employees.FindAsync(id);
            if (existing == null)
                return NotFound();

            existing.Name = employee.Name;
            existing.Role = employee.Role;
            await _context.SaveChangesAsync();
            return Ok(existing);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var existing = await _context.Employees.FindAsync(id);
            if (existing == null)
                return NotFound();

            _context.Employees.Remove(existing);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}