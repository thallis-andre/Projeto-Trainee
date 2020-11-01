import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




import './styles.css';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();


    async function handleLogin(e) {

        e.preventDefault();
        const data = {
            email,
            password: senha,
        }
        try {
            const response = await api.post('/login', data);
            if(response.data.error) {
                alert(response.data.message);
                console.log(window.location.href)
            } else {
                history.push("/home");
            }
        } catch (err) {
            alert('Erro no servidor. Por favor, tente novamente !');
        }

    }

    return (
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
                        type="password"
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
