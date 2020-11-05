import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './styles.css';
import Header from '../Header';


import Sidebar from '../Sidebar'
import Pokemon from '../Pokemon'
import Loader from '../Loader'

import { useLoader } from '../../context/loader';

function Home() {

  const [pokemonType, setPokemonType] = useState('normal')
  // const [pokemonsbyType, setPokemonsbyType] = useState([])
  const [pokemonsList, setPokemonsList] = useState([])
  const { loader, setLoader } = useLoader()


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

    setLoader(true)
    const listPokemonsbyType = await getPokemonsbyType()
    const listPokemonAttributes = await getPokemonAttributes(listPokemonsbyType.data.pokemon)
    Promise.all(listPokemonAttributes).then((values) => {
      setPokemonsList(values)
      setLoader(false)
    })


  }, [pokemonType]);

  async function getAttributes(url) {
    return await axios.get(url)
  }


  return (
    <>
      <div className="container-home">
        <Header />
        <div className="sidebar">
          <Sidebar type={pokemonType} setType={setPokemonType} />
        </div>
        <div className="content">
          <Pokemon listPokemons={pokemonsList} />
        </div>
      </div>
      <Loader />

    </>
  );
}

export default Home;
