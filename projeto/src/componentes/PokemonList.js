import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PokemonList = ({ pokemons, addToPokedex, isAddedToPokedex }) => {
  return (
    <ListContainer>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          addToPokedex={addToPokedex}
          isAddedToPokedex={isAddedToPokedex(pokemon)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
