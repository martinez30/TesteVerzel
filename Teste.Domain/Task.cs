using System;
using System.Collections.Generic;

namespace Teste.Domain
{
    public class Task
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string InitialDate { get; set; }
        public string FinishDate { get; set; }
    }
}