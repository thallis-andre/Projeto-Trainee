import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './styles.css';

import Sidebar from '../Sidebar'
import Pokemon from '../Pokemon'


function Home() {

  const [pokemonType, setPokemonType] = useState('normal')
  // const [pokemonsbyType, setPokemonsbyType] = useState([])
  const [pokemonsList, setPokemonsList] = useState([])


  useEffect(async () => {

    function getPokemonsbyType() {
      const response = axios.get(`https://pokeapi.co/api/v2/type/${pokemonType.toLowerCase()}`);
      return response
    }

    function getPokemonAttributes(pokemonsbyType) {
      const promises = []
      pokemonsbyType.map(data => {
        const result = getAttributes(data.pokemon.url)
        promises.push(result)
      })
      
      return promises
    }

    const listPokemonsbyType = await getPokemonsbyType()
    const listPokemonAttributes = await getPokemonAttributes(listPokemonsbyType.data.pokemon)
    Promise.all(listPokemonAttributes).then((values) => {
      setPokemonsList(values)
    })


  }, [pokemonType]);

  async function getAttributes(url) {
    return await axios.get(url)
  }


  return (
    <div className="container-home">
      <div className="sidebar">
        <Sidebar type={pokemonType} setType={setPokemonType} />
      </div>
      <div className="content">
        <Pokemon listPokemons={pokemonsList} />
      </div>
    </div>
  );
}

export default Home;
