import React from 'react';

import './styles.css';

export default function Cadastro(){
    return(
        <div className="cadastro-container">
            <section className="form">
                <form>
                    <h1>Faça seu cadastro</h1>
                    <input placeholder="Nome"/>
                    <input placeholder="Seu melhor e-mail"/>
                    <input placeholder="Senha"/>
                    <button className="button">Concluir cadastro</button>

                </form>
            </section>
        </div>
    )
}