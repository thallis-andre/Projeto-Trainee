import React, { useState } from 'react';

import './styles.css';


function Sidebar() {
  // const tiposPokemons = ['Normal', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']
  // const pokemonsTypes = ['Normal', 'Insetos', 'Dark', 'Dragões', 'Elétricos', 'Fadas', 'Lutadores', 'Fogo', 
  // 'Voadores', 'Fantasmas', 'Grama', 'Terra', 'Gelo', 'Venenosos', 'Psíquicos', 'Pedra', 'Metal', 'Aquáticos']

  const [isFocus, setIsFocus] = useState('')

  const pokemonsTypes = [
    { type: 'NORMAL', color: '#ababab' },
    { type: 'INSETOS', color: '#1c4b27' },
    { type: 'DARK', color: '#040707' },
    { type: 'DRAGÕES', color: '#448a95' },
    { type: 'ELÉTRICOS', color: '#e2e32b' },
    { type: 'FADAS', color: '#961a45' },
    { type: 'LUTADORES', color: '#994025' },
    { type: 'FOGO', color: '#ab1f24' },
    { type: 'VOADORES', color: '#4a677d' },
    { type: 'FANTASMAS', color: '#33336b' },
    { type: 'GRAMA', color: '#27cb50' },
    { type: 'TERRA', color: '#a8702d' },
    { type: 'GELO', color: '#86d2f5' },
    { type: 'VENENOSOS', color: '#9b69da' },
    { type: 'PSÍQUICOS', color: '#f71d92' },
    { type: 'PEDRA', color: '#48190b' },
    { type: 'METAL', color: '#60756e' },
    { type: 'AQUÁTICOS', color: '#1552e1' }
  ]
  return (
    <div className="sidebar-container">

      { pokemonsTypes.map(pokemonsTypes => (
        <button className="pokemon-type"
        onClick={() => setIsFocus(pokemonsTypes.type)}
        style={{ color: isFocus === pokemonsTypes.type ? '#fff' : pokemonsTypes.color, backgroundColor: isFocus === pokemonsTypes.type ? 'red' : '#f2f1f0'  }} >

          {pokemonsTypes.type} 
          </button>
      ))}
    </div>
  );
}

export default Sidebar;
