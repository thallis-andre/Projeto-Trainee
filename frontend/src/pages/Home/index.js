import React from 'react';

import './styles.css';

import Sidebar from '../Sidebar'
import Pokemon from '../Pokemon'


function Home() {
  return (
    <div className="container-home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Pokemon />
      </div>
    </div>
  );
}

export default Home;
