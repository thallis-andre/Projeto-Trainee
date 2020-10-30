import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Login(){
    function handleLogin(e){
        const[]
        e.preventDefault();
    }
    return(
        <div className="login-container">
        <section className="form">
            
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
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
