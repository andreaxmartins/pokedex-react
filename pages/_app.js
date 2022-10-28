/** @jsxImportSource @emotion/react */
import '../styles/globals.css';
import { useState } from 'react';
import PokemonList from './PokemonList';

function App() {
  // const [pokemon, setPokemon] = useState(['Charizard', 'Pikachu']);

  return (
    <section className="card" css={styles.card}>
      <div className="pokemon-icon">
        {/* I get a warning from ESLint about the image tag. How should I proceed with this? */}
        <img alt="Pokemon Image"></img>
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">Charizard</h2>
        <div className="pokemon-types">
          <h3>Fire</h3>
          <h3>Flying</h3>
        </div>
      </div>
      <div className="pokemon-number">#06</div>
    </section>
  );
}

const styles = {
  card: {
    padding: '0 2rem',
  },
  card: {
    minHeight: '10vh',
    padding: '2rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
  },
};

export default App;
