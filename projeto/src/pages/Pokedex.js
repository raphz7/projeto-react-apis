import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';

const PokedexPage = ({ pokedex, removeFromPokedex }) => {
  return (
    <div>
      <Header />
      <h2>Pokédex</h2>
      {pokedex.map((pokemon) => (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <Link to={`/details/${pokemon.id}`}>Detalhes</Link>
          <button onClick={() => removeFromPokedex(pokemon.id)}>Remover da Pokédex</button>
        </div>
      ))}
    </div>
  );
};

export default PokedexPage;
