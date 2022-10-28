import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

function PokemonContainer() {
  const [pokemonList, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon-species'
        );
        setPokemon(response.data.results);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchPokemon();
  }, []);

  return <PokemonList pokemons={pokemonList} />;
}

export default PokemonContainer;
