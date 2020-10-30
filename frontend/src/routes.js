import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Estrutura from './pages/Estrutura';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Estrutura}/>
            <Route path="/teste" exact component={Cadastro}/>
        </Switch>
    );
}
