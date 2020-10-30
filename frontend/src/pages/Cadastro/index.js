import React,{useState} from 'react';
import api from '../../services/api';


import './styles.css';

export default function Cadastro(){
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[senha, setSenha]=useState('');
    function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            senha,
        }
      api.post('register',data);
      
    }
    return(
        <div className="cadastro-container">
            <section className="form">
                <form onSubmit={handleCadastro}>
                    <h1>Faça seu cadastro</h1>
                    <input 
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button">Concluir cadastro</button>

                </form>
            </section>
        </div>
    )
}