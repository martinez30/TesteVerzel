import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap' 
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
      <h4>Projeto elaborado com FrontEnd em <a href="https://pt-br.reactjs.org/" target="_blank">ReactJs</a> com BackEnd em <a href="https://docs.microsoft.com/pt-br/dotnet/" target="_blank">ASP .NET CORE em C# 3.1</a>, WebAPI e Banco <a href="https://www.sqlite.org/index.html" target="_blank">Sqlite</a></h4>
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
        <tr>
          <td>123</td>
          <td colSpan="2">Terminar projeto</td>
          <td>09/01/2021</td>
          <td>Pendente</td>
          <td>
            <Link to="/editar" className="btn btn-warning icon">
              <span class="material-icons" title="Editar">create</span>
            </Link>
            <a className="btn btn-danger icon">
              <span class="material-icons" title="Deletar">delete</span>
            </a>
          </td>
        </tr>
      </tbody>
    </Table>  
    </>
    );
  }
}
