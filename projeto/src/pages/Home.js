import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonList from '../componentes/PokemonList';
import Header from '../componentes/Header';

const HomeContainer = styled.div`
  padding: 100px;
`;

const HomeTitle = styled.h2`
  margin-top: 0;
`;

const Home = ({ addToPokedex }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  useEffect(() => {
    setPokedex([]);
  }, []);

  const handleAddToPokedex = (pokemon) => {
    setPokedex((prevPokedex) => [...prevPokedex, pokemon]);
    addToPokedex(pokemon);
  };

  const isAddedToPokedex = (pokemon) => {
    return pokedex.some((p) => p.id === pokemon.id);
  };

  return (
    <div>
      <Header />
      <HomeContainer>
        <HomeTitle>Home</HomeTitle>
        <PokemonList
          pokemons={pokemons}
          addToPokedex={handleAddToPokedex}
          isAddedToPokedex={isAddedToPokedex}
        />
      </HomeContainer>
    </div>
  );
};

export default Home;
