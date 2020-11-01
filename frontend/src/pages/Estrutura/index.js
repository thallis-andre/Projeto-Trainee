import React, {useState} from 'react';

import './styles.css';

import bolinha from '../../assets/bolinha.png';
import Login from '../Login';
import Cadastro from '../Cadastro';

export default function Estrutura(){


    return (
        <div className='estrutura-container'>
        <div className='estrutura-image'>
            <h1>Welcome Trainer</h1>
            <img src={bolinha} alt="Gotta catch'em all"/>
        </div>
        <div className='estrutura-textos'>
            <Login/>
        </div>
    </div>
    )
}
//na className text colocaremos o login e cadastro,ainda falta arrumar a rota e uns design