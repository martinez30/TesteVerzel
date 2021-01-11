import React, {useState } from 'react';
import {Link} from 'react-router-dom';
// import api from '../../../_api/baseApi';

import './Login.css'

function Login(){

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const login = () => {
        const userDto = { userName: user, password: password };
        // const result = api.post('/task', userDto);
        // console.log(result);
    }

    return (
        <div>
            <form onSubmit={() => console.log(user, password)} className="form-signin">
                <h3>Login</h3>
                <label>Usuário</label>
                <input onChange={(e) => setUser(e.target.value)} className="form-control"/>
                <label>Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                <input className="btn btn-primary submit button-align-center" value="Entrar" onClick={login}/>
                <p>Não tem login? Cadastre-se abaixo</p>
                <Link to="/register" className="register btn btn-secondary button-align-center">Quero me cadastrar</Link>
            </form>
        </div>
    )
}

export default Login