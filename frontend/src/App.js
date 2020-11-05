import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes'
import UserProvider from './context/user'
import LoaderProvider from './context/loader'



import './global.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <LoaderProvider>
          <UserProvider>
            <Routes />
          </UserProvider>
        </LoaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
