import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes'
import UserProvider from './context/user'



import './global.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
