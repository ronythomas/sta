using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace STA.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldClientController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly ILogger<HelloWorldClientController> _logger;

        public HelloWorldClientController(IHttpClientFactory clientFactory, ILogger<HelloWorldClientController> logger)
        {
            _clientFactory = clientFactory ?? throw new ArgumentNullException(nameof(clientFactory));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        public async Task<string> Get()
        {
            var httpClient = _clientFactory.CreateClient(StaWebConstants.StaApiHttpClientName);
            var uriBuilder = new UriBuilder(httpClient.BaseAddress);
            uriBuilder.Path += "helloworld";
            var response = await httpClient.GetAsync(uriBuilder.Uri);

            if (response.IsSuccessStatusCode)
            {
                var responseString = await response.Content.ReadAsStringAsync();
                var apiResponse = JsonSerializer.Deserialize<string>(responseString);
                return apiResponse;
            }
            else
            {
                var exception = new HttpRequestException(response.ReasonPhrase);
                _logger.LogError(exception, "api call failed");
                throw exception;
            }
        }
    }
}
