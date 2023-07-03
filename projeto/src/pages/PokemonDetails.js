import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonDetails from '../componentes/PokemonDatails';
import Header from '../componentes/Header';

const PokemonDetailsPage = ({ match, addToPokedex, removeFromPokedex }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonId = match.params.id;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
      setPokemon(response.data);
    });
  }, [match]);

  if (!pokemon) {
    return <div>Carregando detalhes do Pokémon...</div>;
  }

  return (
    <div>
      <Header />
      <h2>Detalhes do Pokémon</h2>
      <PokemonDetails pokemon={pokemon} addToPokedex={addToPokedex} removeFromPokedex={removeFromPokedex} />
    </div>
  );
};

export default PokemonDetailsPage;
