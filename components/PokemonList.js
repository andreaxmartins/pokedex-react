import React from 'react';
import Card from './card/Card';

function PokemonList({ pokemons }) {
  return pokemons.map((p) => <Card pokemon={p} key={p.number} />);
}

export default PokemonList;
