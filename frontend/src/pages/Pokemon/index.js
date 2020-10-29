import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './styles.css';
import bolinha from '../../assets/bolinha.png';



function Pokemon() {




  function colorProgressBar(progress) {

    if (progress <= 100) {
      return "danger"
    }
    if (progress > 100 && progress <= 150) {
      return "warning"
    }
    if (progress > 150 && progress <= 200) {
      return "info"
    }
    if (progress > 200) {
      return "success"
    }
  }

  return (
    <div className="pokemon-content">

      <div className="square-pokemon">
        <div className="circle-attributes">
          <div className="circle-heigth">
            <span>150.0Kg</span>
          </div>
          <div className="circle-weight">
            <span>150.0Kg</span>
          </div>
        </div>

        <div className="square-content">
          <h1 className="pokemon-id">#154</h1>
          <img src={bolinha} style={{ width: 70, height: 150 }} />
          <h2 className="pokemon-name">MEGA HERACROSS</h2>
          <h3 className="type">LUTADOR - FOGO</h3>
          <h4 className="special-ability">Rajada de fogo</h4>
        </div>
      </div>

      <div className="pokemon-attributes">
        <div className="attributes-name">
          <span>Velocidade</span>
          <span className="number-status">130</span>
          <ProgressBar now={45} variant={colorProgressBar(200)} />
        </div>
        <div className="attributes-name">
          <span>Defesa especial</span>
          <span className="number-status">100</span>
          <ProgressBar now={45} variant={colorProgressBar(100)} />
        </div>
        <div className="attributes-name">
          <span>Ataque especial</span>
          <span className="number-status">154</span>
          <ProgressBar now={45} variant={colorProgressBar(100)} />
        </div>
        <div className="attributes-name">
          <span>Defesa</span>
          <span className="number-status">100</span>
          <ProgressBar now={45} variant={colorProgressBar(100)} />
        </div>
        <div className="attributes-name">
          <span>Ataque</span>
          <span className="number-status">190</span>
          <ProgressBar now={45} variant={colorProgressBar(100)} />
        </div>
        <div className="attributes-name">
          <span>Hp</span>
          <span className="number-status">106</span>
          <ProgressBar now={45} variant={colorProgressBar(100)} />
        </div>
      </div>

    </div>

  );
}

export default Pokemon;
