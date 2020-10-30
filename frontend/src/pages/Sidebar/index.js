import React, { useState } from 'react';


import './styles.css';



function Sidebar(props) {
  // const tiposPokemons = ['Normal', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 
  // 'Ghost', 'Grass', 'Ground', 'Ice', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']
  // const pokemonsTypes = ['Normal', 'Insetos', 'Dark', 'Dragões', 'Elétricos', 'Fadas', 'Lutadores', 'Fogo', 
  // 'Voadores', 'Fantasmas', 'Grama', 'Terra', 'Gelo', 'Venenosos', 'Psíquicos', 'Pedra', 'Metal', 'Aquáticos']

  // const [loading, setLoading] = useState(false);



  const pokemonsTypes = [
    { type: 'NORMAL', color: '#ababab' },
    { type: 'BUG', color: '#1c4b27' },
    { type: 'DARK', color: '#040707' },
    { type: 'DRAGON', color: '#448a95' },
    { type: 'ELECTRIC', color: '#e2e32b' },
    { type: 'FAIRY', color: '#961a45' },
    { type: 'FIGHTING', color: '#994025' },
    { type: 'FIRE', color: '#ab1f24' },
    { type: 'FLYING', color: '#4a677d' },
    { type: 'GHOST', color: '#33336b' },
    { type: 'GRASS', color: '#27cb50' },
    { type: 'GROUND', color: '#a8702d' },
    { type: 'ICE', color: '#86d2f5' },
    { type: 'POISON', color: '#9b69da' },
    { type: 'PSYCHIC', color: '#f71d92' },
    { type: 'ROCK', color: '#48190b' },
    { type: 'STEEL', color: '#60756e' },
    { type: 'WATER', color: '#1552e1' }
  ]

    return (
      <div className="sidebar-container">

        { pokemonsTypes.map(pokemonsTypes => (
          <button className="pokemon-type"
            key={pokemonsTypes.type}
            onClick={() => props.setType(pokemonsTypes.type)}
            style={{ color: props.type === pokemonsTypes.type ? '#fff' : pokemonsTypes.color, backgroundColor: props.type === pokemonsTypes.type ? 'red' : '#f2f1f0' }} >
            {pokemonsTypes.type}
          </button>
        ))}

      </div>
    );
  }

  export default Sidebar;
