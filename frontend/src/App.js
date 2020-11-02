import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes'



import './global.css';

import Header from './pages/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
