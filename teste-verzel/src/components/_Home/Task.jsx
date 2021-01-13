import React from 'react'
import {Link} from 'react-router-dom'

function TaskForm({onClick = () => {}, tasks = {}}) {
    
    return tasks.map((task, index) => (
            <tr key={index}>
          <td>{task.id}</td>
          <td colSpan="2">{task.description}</td>
          <td>{task.initialDate}</td>
          <td>{task.finishDate}</td>
          <td>
            <Link to={{ pathname: "/task/" + task.id}} className="btn btn-warning icon">
              <span className="material-icons" title="Editar">create</span>
            </Link>
            <button className="btn btn-danger icon" onClick={() => onClick(task.id)}>
              <span className="material-icons" title="Deletar">delete</span>
            </button>
          </td>
        </tr>
    ))
}

export default TaskForm
