using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using reactAspNetCore.Models;

namespace reactAspNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        //instancia de nuestro contexto
        private readonly EmpleadosContext _dbcontext;
        public EmpleadoController(EmpleadosContext context)
        {
            _dbcontext = context;
        }
        [HttpGet]//tipo GET
        [Route("ObtenerEMpleado")]//nombre de la ruta de como va ser llamado el metodo
        public IActionResult ObtenerEMpleado()
        {
            List<Empleado> lista = _dbcontext.Empleados.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);//codigo de respuesta exitosa y la lista
        }
    }
}
