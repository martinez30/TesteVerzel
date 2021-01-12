import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import jwt_decoded from '../../../../../teste-verzel/node_modules/jwt-decode/'

import api from '../../../_api/baseApi'
import {login} from '../../.././auth/auth.guard'

import './Register.css';

function Register(){

    const history = useHistory();

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    
    const register = () => {
        const userDto = { userName: user, password: password, email: email}
        api.post('user/register', userDto).then((response) => {
            if(response){
                api.post('user/login', userDto).then((response) => {
                    login(response.data.token);
                    history.push('/home');
                    const tokenDecoded = jwt_decoded(response.data.token);
                    sessionStorage.setItem('userName', tokenDecoded.unique_name);
                })
            }
        })
    }

    return (
        <div>
            <form className="form-register">
                <h3>Login</h3>
                <label>Usuário</label>
                <input onChange={(e) => setUser(e.target.value)} className="form-control"/>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                <label>Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                <input className="btn btn-primary submit button-align-center" value="Cadastrar" type="button" onClick={register}/>
                <Link to="/login" className="register btn btn-secondary button-align-center">Voltar</Link>
            </form>
        </div>
    )

}


export default Register
