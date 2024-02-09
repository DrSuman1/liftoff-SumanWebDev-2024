﻿using BloodBankManagmemntSystem.ComponentModel;
using BloodBankManagmemntSystem.Data;
using BloodBankManagmemntSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace BloodBankManagmemntSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class  DonorController : ControllerBase
    {
        // establish database context
        private BloodDbContext context;

        public DonorController(BloodDbContext dbcontext)
        {
            context = dbcontext;
        }
       
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        //// GET api/<UserController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<UserController>
        [HttpPost("Register")]
        public ActionResult Register(Donor model)
        {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Donor newDonor = new Donor
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Gender = model.Gender,
                DateOfBirth = model.DateOfBirth,
                BloodType = model.BloodType,
                Address = model.Address,
                City = model.City,
                Country = model.Country,
                Email = model.Email,
                Phone = model.Phone,
                Password = model.Password
            };


            try
            {
                context.Donors.Add(newDonor);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal Server Error" + ex.Message);
            }
            
            return Ok(model);
        }


    }


    //// PUT api/<UserController>/5
    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody] string value)
    //{
    //}

    //// DELETE api/<UserController>/5
    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
}

