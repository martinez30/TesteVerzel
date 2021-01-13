import React from 'react';
import {Link} from 'react-router-dom'

function Error(){
    return (
        <div>
            <h4>Erro 404</h4>
            <p>Página não encontrada</p>

            <Link to="/home">Volta para Home</Link>
        </div>
    )
}

export default Error