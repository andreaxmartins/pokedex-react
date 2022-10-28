/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import { useState } from 'react';
import PokemonList from '../components/PokemonList';
import PokemonContainer from '../containers/pokemons';

const Home = () => {
  return <PokemonContainer />;
};

const styles = {
  container: {
    padding: '0 2rem',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
  },
};

export default Home;
