﻿using BloodBankManagmemntSystem.ComponentModel;
using BloodBankManagmemntSystem.Data;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BloodBankManagmemntSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class  RegisterUserController : ControllerBase
    {
       
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
        [HttpPost]
        [Route("Register")]
        public ActionResult Register(InputModel model)
        {
            if (ModelState.IsValid)
            {
                // return error status code
                Models.RegisterModel inputModel = new Models.RegisterModel
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Password = model.Password,
                    ConfirmPassword = model.ConfirmPassword,
                    Gender = model.Gender,
                    City = model.City,
                    Country = model.Country
                };
                BloodDbContext context = new BloodDbContext();
                context.registerModel.Add(inputModel);
                context.SaveChanges();

                return BadRequest(ModelState);
            }
            {
            // return success status code
                return Ok();
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
}
