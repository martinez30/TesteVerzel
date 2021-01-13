import React, {useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../../_api/baseApi.jsx';
import jwt_decoded from '../../../../../teste-verzel/node_modules/jwt-decode/'

import { login } from '../../../auth/auth.guard'

import './Login.css'

function Login(){

    const history = useHistory();

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    async function loggin(props){
        if(user !== '' && password !== ''){
            const userDto = { userName: user, password: password };
            try{
                const response = await api.post('user/login', userDto );
                if(response){
                    login(response.data.token);
                    history.push('/home')
                    const tokenDecoded = jwt_decoded(response.data.token);
                    sessionStorage.setItem('userName', tokenDecoded.unique_name);
                }
                else{
                    history.push('/register')
                }
            }
            catch(error){
                console.log(error);
            }
        }
        else if(props){
            console.log('erro');
        }
    }

    return (
        <div>
            <form className="form-signin">
                <h3>Login</h3>
                <label>Usuário</label>
                <input onChange={(e) => setUser(e.target.value)} className="form-control"/>
                <label>Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                <input className="btn btn-primary submit button-align-center" value="Entrar" type="button" onClick={loggin}/>
                <p>Não tem login? Cadastre-se abaixo</p>
                <Link to="/register" className="register btn btn-secondary button-align-center">Quero me cadastrar</Link>
                <br/> <br/>
                <p>Usuario Padrao</p>
                <p>user: admin senha: admin</p>
            </form>
        </div>
    )
}

export default Login