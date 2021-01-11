using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Teste.API.Repository;

namespace Teste.Repository
{
    public class TesteRepository : ITesteRepository
    {

        private readonly TesteContext _context;
        public TesteRepository(TesteContext context)
        {
            this._context = context;    
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);        
        }

        public void DeleteRange<T>(T[] entity) where T : class
        {
            _context.RemoveRange(entity);
        }
        
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

       //Task
        public async Task<Teste.Domain.Task[]> GetAllTaskAsync()
        {
            IQueryable<Teste.Domain.Task> query = _context.Tasks;

        
                query = query.AsNoTracking().OrderBy(x=> x.Id);

                return await query.ToArrayAsync();
        }

        public async Task<Teste.Domain.Task[]> GetAllTaskAsyncByDescription(string description)
        {
            IQueryable<Teste.Domain.Task> query = _context.Tasks;

                query = query.AsNoTracking().OrderBy(x=> x.Id)
                           .Where(x=> x.Description.ToLower().Contains(description.ToLower()));

                return await query.ToArrayAsync();
        }

        public async Task<Teste.Domain.Task> GetTaskAsyncById(int TaskId)
        {
            IQueryable<Teste.Domain.Task> query = _context.Tasks;

                query = query.AsNoTracking().OrderByDescending(x=> x.InitialDate)
                        .Where(x=> x.Id == TaskId);

                return await query.FirstOrDefaultAsync();
        }

    }
}