import React, { useState } from 'react';
import api from '../../services/api';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import './styles.css';
import Loader from '../Loader'
import { useLoader } from '../../context/loader';


export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();
    const { loader, setLoader } = useLoader()


    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password: senha,
        }
        try {
            setLoader(true)
            const response = await api.post('register', data);
            if (response.data) {
                alert(response.data.message);
                history.push("/");
                setLoader(false)
            } else {
                alert(response.data.message);
                setLoader(false)
            }
        }
        catch (err) {
            alert('Não foi possível realizar o cadastro')
            setLoader(false)
        }
    }
    return (
        <>
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
                            type="password"
                            onChange={e => setSenha(e.target.value)}
                        />
                        <button className="button">Concluir cadastro</button>

                        <Link to="/">
                            <FiLogOut size={16} color="#FB3C03" className="icon-login" />
                        Já tenho cadastro
                    </Link>
                    </form>
                </section>
            </div>
            <Loader />
        </>
    )
}