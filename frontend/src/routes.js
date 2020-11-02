import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Estrutura from './pages/Estrutura';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoutes path="/profile" component={Profile} />
            <PrivateRoutes path="/home" component={Home} />
            <Route path="/" component={Estrutura} />
        </Switch>
    );
}


const PrivateRoutes = props => {
    const isLogged = !!localStorage.getItem('token')
    return isLogged ? <Route { ...props } /> : <Redirect to="/" />
}