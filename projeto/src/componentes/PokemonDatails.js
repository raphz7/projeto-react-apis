import React from 'react';

const PokemonDetails = ({ pokemon, addToPokedex, removeFromPokedex }) => {
  const { name, id } = pokemon;

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => addToPokedex(pokemon)}>Adicionar à Pokédex</button>
      <button onClick={() => removeFromPokedex(id)}>Remover da Pokédex</button>
    </div>
  );
};

export default PokemonDetails;
