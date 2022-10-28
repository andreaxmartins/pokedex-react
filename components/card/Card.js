/** @jsxImportSource @emotion/react */
import { styles } from './styles';
import { useState } from 'react';
import Image from 'next/image';

function Card({ pokemon }) {
  return (
    <section className="card" css={styles.card}>
      <div className="pokemon-icon">
        <Image
          src={pokemon.url}
          alt={`${pokemon.name} picture`}
          width="100px"
          height="100px"
        />
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="pokemon-types">
          <h3>{pokemon.type01}</h3>
          <h3>{pokemon.type02}</h3>
        </div>
      </div>
      <div className="pokemon-number">{pokemon.number}</div>
    </section>
  );
}

export default Card;
