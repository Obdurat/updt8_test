using ClientsApi.Context;
using ClientsApi.Models;
using ClientsApi.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClientsApi.Controllers;

[Route("/states")]
public class StatesController : ControllerBase {
    private readonly DataContext db;

    public StatesController(DataContext db) {
        this.db = db;
    }

    [HttpGet]
    public IActionResult GetAll() {
        var states = db.States.ToList();
        return Ok(states);
    }     
}