using System.Net.Http.Headers;
using System.IO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.API.DTOs;
using Teste.Domain;
using Teste.Repository;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace Teste.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITesteRepository _repository;

        public IMapper _mapper { get; }

        public TaskController(ITesteRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }        

        [HttpGet]
        public async Task<IActionResult> Get(){
            try
            {
                var Tasks = await  _repository.GetAllTaskAsync();

                var results = _mapper.Map<IEnumerable<API.DTOs.TaskDto>>(Tasks);

                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }

        [HttpGet("{TaskId}")]
        public async Task<IActionResult> Get(int TaskId){
            try
            {
                var Task = await  _repository.GetTaskAsyncById(TaskId);

                var result = _mapper.Map<TaskDto>(Task);

                return Ok(result);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }

        [HttpGet("getByDescription/{tema}")]
        public async Task<IActionResult> Get(string tema){
            try
            {
                var Tasks = await  _repository.GetAllTaskAsyncByDescription(tema);

                 var results = _mapper.Map<IEnumerable<TaskDto>>(Tasks);

                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(TaskDto model){
            try
            {

                var Task = _mapper.Map<Teste.Domain.Task>(model);

                _repository.Add(Task);

                if(await _repository.SaveChangesAsync())
                    return Created($"/api/Task/{model.Id}", _mapper.Map<TaskDto>(Task));
                
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
        }

        [HttpPut("{TaskId}")]
        public async Task<IActionResult> Put(int TaskId, TaskDto model){
            try
            {
                var Task = await _repository.GetTaskAsyncById(TaskId);
                if(Task is null) return NotFound();

                _mapper.Map(model, Task);

                _repository.Update(Task);
                
                if(await _repository.SaveChangesAsync()){
                    return Ok();
                }

            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return BadRequest();
        }

        [HttpDelete("{TaskId}")]
        public async Task<IActionResult> Delete(int TaskId){
            try
            {
                var Task = await _repository.GetTaskAsyncById(TaskId);
                if(Task is null) return NotFound();

                _repository.Delete(Task);
                
                if(await _repository.SaveChangesAsync()){
                    return Ok();
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
        }
    }
}