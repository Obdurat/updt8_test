using ClientsApi.Context;
using ClientsApi.Models;
using ClientsApi.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClientsApi.Controllers;

[Route("/client")]
public class ClientsController : ControllerBase {
     private readonly DataContext db;

     public ClientsController(DataContext db) {
        this.db = db;
     }

     [HttpGet]
     public IActionResult GetAll() {
        var clients = db.Clients.Include(c => c.city).Include(c => c.state).ToList();
        return Ok(clients);
     }

     [HttpGet("{id}")]
     public IActionResult GetOne([FromRouteAttribute] int id) {
      try {
        var client = db.Clients.Where(c => c.id == id).Include(c => c.city).Include(c => c.state).First();
        if (client == null) return NotFound();
        return Ok(client);
      } catch (Exception e) {
         return Problem(e.Message, e.Source, 400);
      }
     }

     [HttpPost]
     public IActionResult Create([FromBody] ClientDTO body) {
      try {
         var city = db.Cities.Find(body.city);
         if (city == null) return Conflict(new {Message = "No Such City"});
         var state = db.States.Find(body.state);
         if (state == null) return Conflict(new {Message = "No Such State"});
         var client = new Client();
         client.birthDate = body.birthDate;
         client.cpf = body.cpf;
         client.name = body.name;
         client.sex = body.sex;
         client.city = city;
         client.state = state;
         db.Clients.Add(client);
         db.SaveChanges();      
         return Ok(client);
      } catch (Exception e) {
         return Problem(e.Message, e.Source, 400);
      }
     }

    [HttpPut("{id}")]
     public IActionResult Update([FromRouteAttribute] int id, [FromBody] ClientDTO body) {
      try {
        var found = db.Clients.Find(id);
        if (found == null) return NotFound(new {Message = "No such client"});
        var city = db.Cities.Find(body.city);
        if (city == null) return Conflict(new {Message = "No Such City"});
        var state = db.States.Find(body.state);
        if (state == null) return Conflict(new {Message = "No Such State"});
        found.birthDate = body.birthDate;
        found.city = city;
        found.state = state;
        found.sex = body.sex;
        found.name = body.name;
        found.cpf = body.cpf;
        db.Clients.Update(found);
        db.SaveChanges();
        return Ok(found);
      } catch (Exception e) {
         return Problem(e.Message, e.Source, 400);
      }
     }

     [HttpDelete("{id}")]
     public IActionResult Delete([FromRouteAttribute] int id) {
      try {
        var client = db.Clients.Find(id);
        if (client == null) return NotFound();
        db.Clients.Remove(client);
        db.SaveChanges();
        return Ok(client);
      } catch (Exception e) {
         return Problem(e.Message, e.Source, 400);
      }
     }
}