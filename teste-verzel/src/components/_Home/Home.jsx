import React , { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap' 
import './Home.css'
import Task from './Task'
import ModalDelete from './ModalDelete/ModalDelete' 

import api from '../../_api/baseApi'

const Home = () => {

  let [tasks, setTasks] = useState([]);
  let [taskId, setTaskId] = useState(0);

    useEffect(() => {
      api.get('task/').then((response) => {
        setTasks(response.data);
      })
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const deleteTask = id => {
    setTaskId(id);
    setIsModalVisible(true);
  }

  const removeTask = id => {
    setIsModalVisible(false);
    if(id){
      api.delete('task/' + id).then((response) => {
        setTasks(tasks.filter(x => x.id !== id))
      });
    }
  }

    return (
      <>
      <h4>Projeto elaborado com FrontEnd em <a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJs</a> com BackEnd em <a href="https://docs.microsoft.com/pt-br/dotnet/" target="_blank" rel="noopener noreferrer">ASP .NET CORE em C# 3.1</a>, WebAPI e Banco <a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">Sqlite</a></h4>
      <Link to="/task" className="btn btn-success create">
        <span className="material-icons" title="Novo">add</span>
      </Link>
      <Table className="mt-5" striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th colSpan="2">Descrição</th>
          <th>Data de Entrega</th>
          <th>Data de Conclusão</th>
          <th>Funções</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.length > 0 ? (
            <Task tasks={tasks} onClick={(e) => deleteTask(e)} />
          ) : (
            <tr><td colSpan="6">Nenhum registro encontrado</td></tr>
          )
        }
        <ModalDelete idTask={taskId} onClose={(e) => removeTask(e)} showModal={isModalVisible}/>
      </tbody>
    </Table>  
    </>
    );

  }

export default Home;
