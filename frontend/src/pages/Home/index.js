import React from 'react';

import './styles.css';

import Sidebar from '../Sidebar'
import Pokemon from '../Pokemon'


function Home() {
  return (
    <div className="container-home">
    <Sidebar />
    <Pokemon />
    </div>
  );
}

export default Home;
