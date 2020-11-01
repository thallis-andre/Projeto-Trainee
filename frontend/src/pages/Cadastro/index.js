import React,{useState} from 'react';
import api from '../../services/api';


import './styles.css';

export default function Cadastro(){
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[senha, setSenha]=useState('');
   
    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            password: senha,
        }
        try{
            const response = await  api.post('register', data);
            alert(response.data.message);
        }
        catch(err){
            alert('Não foi possível realizar o cadastro')
        }
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