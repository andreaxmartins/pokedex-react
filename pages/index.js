/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import { useState } from 'react';
import PokemonList from './PokemonList';

const Home = () => {
  return (
    <div data-testid="home" css={styles.container}>
      <Head>
        <title>Cool Boilerplate</title>
        <meta name="description" content="Cool Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={styles.main}>
        <h1 css={styles.title}>Find your Pokémon</h1>
        {/* Search Bar */}
        <section role="search">
          <form action="#" method="get">
            <fieldset>
              <label for="s">
                <input
                  type="search"
                  name="s"
                  id="s"
                  placeholder="Search by name or number"
                  maxlength="200"
                />
              </label>
            </fieldset>
          </form>
        </section>
        <section className="pokemon-container">
          <section className="all-pokemon"></section>
        </section>
      </main>
    </div>
  );
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
