import React , { useState, Component} from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap' 
import ModalDelete from './ModalDelete/ModalDelete' 
import './Home.css'

import api from '../../_api/baseApi'

function Home(){

  let [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
      api.get('task/').then((response) => {
        tasks = response.data;
      }),
      <>
      <h4>Projeto elaborado com FrontEnd em <a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJs</a> com BackEnd em <a href="https://docs.microsoft.com/pt-br/dotnet/" target="_blank" rel="noopener noreferrer">ASP .NET CORE em C# 3.1</a>, WebAPI e Banco <a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">Sqlite</a></h4>
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
        tasks.map(task => (
          <tr>
              <td>{task.id}</td>
          <td colSpan="2">{task.description}</td>
          <td>{task.initialDate}</td>
          <td>{task.finishDate}</td>
          <td>
          <Link to="/editar" className="btn btn-warning icon">
            <span className="material-icons" title="Editar">create</span>
          </Link>
          <button className="btn btn-danger icon" onClick={() => setIsModalVisible(true)}>
            <span className="material-icons" title="Deletar">delete</span>
          </button>
          {
            isModalVisible ? (
              <ModalDelete confirm={() => setConfirm(true)} onClose={() => setIsModalVisible(false)} showModal={isModalVisible}/>
              ) : null
            }
          </td>
        </tr>
))
    ) : (
      <tr><td colSpan="6">Nenhum resultado encontrado</td></tr>
      )
  }
      </tbody>
    </Table>  
    </>
    );

  }

export default Home;
