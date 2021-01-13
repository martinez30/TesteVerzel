using System;

namespace Teste.API.DTOs
{
    public class TaskDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string InitialDate { get; set; }
        public string FinishDate { get; set; }

    }
}