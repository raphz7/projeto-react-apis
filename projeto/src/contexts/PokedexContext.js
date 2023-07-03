import React, { createContext, useState } from 'react';

const PokedexContext = createContext();

const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemon) => {
    const isPokemonInPokedex = pokedex.some((p) => p.id === pokemon.id);
    if (!isPokemonInPokedex) {
      setPokedex([...pokedex, pokemon]);
    }
  };

  const removeFromPokedex = (pokemon) => {
    const updatedPokedex = pokedex.filter((p) => p.id !== pokemon.id);
    setPokedex(updatedPokedex);
  };

  return (
    <PokedexContext.Provider value={{ pokedex, addToPokedex, removeFromPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };
