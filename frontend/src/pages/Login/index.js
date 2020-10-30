import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

export default function Login(){
    return(
        <div className="login-container">
        <section className="form">
            
            <form>
                <h1>Faça seu login</h1>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <button className="button" type='submit'>Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#FB3C03" />
                        Não tenho cadastro 
                    </a>

                </form>
        
            </section>
        </div>
    )
}
