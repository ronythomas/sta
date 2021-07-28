using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using STA.Api.Services;

namespace STA.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        private readonly ILogger<HelloWorldController> _logger;
        private readonly OrderDbContext _orderDbContext;

        public HelloWorldController(ILogger<HelloWorldController> logger, OrderDbContext orderDbContext)
        {
            if (orderDbContext is null) { throw new ArgumentNullException(nameof(orderDbContext)); }

            _logger = logger;
            _orderDbContext = orderDbContext;
        }

        [HttpGet]
        public async Task<string> Get()
        {
            var setting = await _orderDbContext.Settings.FindAsync("Name");
            return setting?.Value ?? "World";
        }
 
        [HttpPost]
        public async Task<IActionResult> Post(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) { throw new ArgumentNullException(nameof(name)); }

            var setting = await _orderDbContext.Settings.FindAsync("Name");

            if (setting is null)
            {
                var newSetting = new Setting { Key = "Name", Value = name };
                _orderDbContext.Settings.Add(newSetting);
            }
            else
            {
                setting.Value = name;
                _orderDbContext.Settings.Update(setting);
            }

            await _orderDbContext.SaveChangesAsync();

            return Ok();
        }
    }
    [Route("test")]
    public class TestController
    {
        private readonly ILogger<HelloWorldController> _logger;
        private readonly OrderDbContext _orderDbContext;

        public TestController(ILogger<HelloWorldController> logger, OrderDbContext orderDbContext)
        {
        }
        [HttpGet]
        public async Task<string> Get()
        {
            return "This is a test";
        }
        
    }
}
