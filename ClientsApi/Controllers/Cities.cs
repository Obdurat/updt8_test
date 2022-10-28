using ClientsApi.Context;
using ClientsApi.Models;
using ClientsApi.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClientsApi.Controllers;

[Route("/cities")]
public class CitiesController : ControllerBase {
    private readonly DataContext db;

    public CitiesController(DataContext db) {
        this.db = db;
    }

    [HttpGet("{stateid}")]
    public IActionResult GetAll([FromRouteAttribute] int stateid) {
        var cities = db.Cities.Where(c => c.state.id == stateid).ToList();
        return Ok(cities);
    }
}