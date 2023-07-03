import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  width: 200px;
`;

const PokemonImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
`;

const AddButton = styled.button`
  background-color: ${(props) => (props.disabled ? 'blue' : 'blue')};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 8px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#c62828')};
  }
`;

const DetailsButton = styled(Link)`
  background-color: green;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #1976d2;
  }
`;

const Card = ({ pokemon, addToPokedex, isAddedToPokedex }) => {
  const { name, id } = pokemon;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setImageUrl(data.sprites.front_default);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToPokedex = () => {
    if (!isAddedToPokedex) {
      addToPokedex(pokemon);
    }
  };

  return (
    <CardContainer>
      <PokemonImage src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <DetailsButton to={`/details/${id}`}>Detalhes</DetailsButton>
      {!isAddedToPokedex && (
        <AddButton disabled={isAddedToPokedex} onClick={handleAddToPokedex}>
          Adicionar à Pokédex
        </AddButton>
      )}
    </CardContainer>
  );
};

export default Card;
