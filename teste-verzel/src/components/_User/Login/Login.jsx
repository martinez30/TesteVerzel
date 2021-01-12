import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import api from '../../../_api/baseApi.jsx';

import './Login.css'

function Login(){

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    async function login(){
        const userDto = { userName: user, password: password };
        console.log(userDto);
        api.post('user/login', userDto ).then(( response ) => {
            const result = response;
            if(result){
                localStorage.setItem('token', data.token);
                
            }
        });
    }

    return (
        <div>
            <form className="form-signin">
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