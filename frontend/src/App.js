import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes'



import './global.css';

import Header from './pages/Header';
// import Loader from './pages/Loader';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      {/* <Loader /> */}
      <Routes />
    </BrowserRouter>
    </>
  );
}

export default App;
