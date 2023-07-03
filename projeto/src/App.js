import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import PokedexPage from './pages/Pokedex';
import PokemonDetailsPage from './pages/PokemonDetails';

const App = () => {
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemon) => {
    setPokedex((prevPokedex) => [...prevPokedex, pokemon]);
  };

  const removeFromPokedex = (pokemonId) => {
    setPokedex((prevPokedex) => prevPokedex.filter((p) => p.id !== pokemonId));
  };

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home addToPokedex={addToPokedex} />} />
        <Route
          path="/pokedex"
          element={<PokedexPage pokedex={pokedex} removeFromPokedex={removeFromPokedex} />}
        />
        <Route
          path="/details/:id"
          element={
            <PokemonDetailsPage
              addToPokedex={addToPokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
