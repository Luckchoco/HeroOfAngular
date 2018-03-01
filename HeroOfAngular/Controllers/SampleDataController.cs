using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HeroOfAngular.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }


        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }


        //--------Hero-----------//
        public class Hero
        {
            public int id { get; set; }
            public string name { get; set; }
        }


        private static Hero[] HeroAry = new[]{
            new Hero(){ id= 11, name = "Mr. Nice" },
            new Hero(){ id= 12, name = "Narco" },
            new Hero(){ id= 13, name = "Bombasto" },
            new Hero(){ id= 14, name = "Celeritas" },
            new Hero(){ id= 15, name = "Magneta" },
            new Hero(){ id= 16, name = "RubberMan" },
            new Hero(){ id= 17, name = "Dynama" },
            new Hero(){ id= 18, name = "Dr IQ" },
            new Hero(){ id= 19, name = "Magma" },
            new Hero(){ id= 20, name = "Tornado Y" },

        };

        [HttpGet("[action]")]
        public IEnumerable<Hero> Heros()
        {
            var rng = new Random();
            return HeroAry;
        }



    }
}
