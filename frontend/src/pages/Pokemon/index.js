import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './styles.css';
import bolinha from '../../assets/bolinha.png';




function Pokemon(props) {


  function colorProgressBar(progress) {

    if (progress <= 30) {
      return "danger"
    }
    if (progress > 30 && progress <= 65) {
      return "warning"
    }
    if (progress > 65 && progress <= 89) {
      return "info"
    }
    if (progress >= 90) {
      return "success"
    }
  }

  function returnProgress(stats) {
    return ((stats * 100) / 110)
  }


  console.log(props.listPokemons)
  return (
    <>
      {
        props.listPokemons.map((pokemon, index) => (
          <div className="pokemon-content" key={pokemon.id} style={{backgroundColor: (index % 2) == 0 ? '#f2f1f0' : '#f7f6f6'}}>
            <div className="square-pokemon">
              <div className="circle-attributes">
                <div className="circle-heigth">
                  <span>{pokemon.data.height}m</span>
                </div>
                <div className="circle-weight">
                  <span>{pokemon.data.weight}Kg</span>
                </div>
              </div>

              <div className="square-content">
                <h1 className="pokemon-id">#{pokemon.data.id}</h1>
                <img src={pokemon.data.sprites.front_default} style={{ width: 70, height: 150 }} />
                <h2 className="pokemon-name">{pokemon.data.name.toUpperCase()}</h2>
                <h3 className="type">{pokemon.data.types[0].type.name.toUpperCase()}{pokemon.data.types[1] ? ` - ${pokemon.data.types[1].type.name.toUpperCase()}` : ''}</h3>
                <h4 className="special-ability">{pokemon.data.abilities[0] ? pokemon.data.abilities[0].ability.name : ''}</h4>
              </div>
            </div>

            <div className="pokemon-attributes">
              <div className="attributes-name">
                <span>Velocidade</span>
                <span className="number-status">{pokemon.data.stats[5].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[5].base_stat)} variant={colorProgressBar(pokemon.data.stats[5].base_stat)} />
              </div>
              <div className="attributes-name">
                <span>Defesa especial</span>
                <span className="number-status">{pokemon.data.stats[4].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[4].base_stat)} variant={colorProgressBar(pokemon.data.stats[4].base_stat)} />
              </div>
              <div className="attributes-name">
                <span>Ataque especial</span>
                <span className="number-status">{pokemon.data.stats[3].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[3].base_stat)} variant={colorProgressBar(pokemon.data.stats[3].base_stat)} />
              </div>
              <div className="attributes-name">
                <span>Defesa</span>
                <span className="number-status">{pokemon.data.stats[2].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[2].base_stat)} variant={colorProgressBar(pokemon.data.stats[2].base_stat)} />
              </div>
              <div className="attributes-name">
                <span>Ataque</span>
                <span className="number-status">{pokemon.data.stats[1].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[1].base_stat)} variant={colorProgressBar(pokemon.data.stats[1].base_stat)} />
              </div>
              <div className="attributes-name">
                <span>Hp</span>
                <span className="number-status">{pokemon.data.stats[0].base_stat}</span>
                <ProgressBar now={returnProgress(pokemon.data.stats[0].base_stat)} variant={colorProgressBar(pokemon.data.stats[0].base_stat)} />
              </div>
            </div>

          </div>
        ))
      }
    </>
  );
}

export default Pokemon;
