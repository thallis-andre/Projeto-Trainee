import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Login(){ 
    const[email, setEmail]= useState('');
    const[senha, setSenha]= useState('');

    async function handleLogin(e){
       
        e.preventDefault();
        const data = {
            email,
            senha,
        }
        try{
            const response = await api.post('login',{data});
            console.log(response.data);
            alert('Login feito com sucesso');
        }catch(err){
            alert('Usuário não encontrado');
        }
        
    }
    return(
        <div className="login-container">
        <section className="form">
            
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input
                 placeholder="E-mail"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 />
                <input 
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                />
                <button className="button" type='submit'>Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#FB3C03" />
                        Não tenho cadastro 
                    </Link>

                </form>
        
            </section>
        </div>
    )
}
