using System.Threading.Tasks;

namespace Teste.Repository
{
    public interface ITesteRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entity) where T : class;
        Task<bool> SaveChangesAsync();

        // //Task
        Task<Teste.Domain.Task[]> GetAllTaskAsync();
        Task<Teste.Domain.Task[]> GetAllTaskAsyncByDescription(string description);
        Task<Teste.Domain.Task> GetTaskAsyncById(int TaskId);
    }
}