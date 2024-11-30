import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { SuggestionsList } from '../components/SuggestionsList';

export const SearchBar = ({ onPokemonSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleSearch = debounce((term) => {
    if (term) {
      const filtered = pokemonList.filter((name) =>
        name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPokemon(filtered.slice(0, 3));
    } else {
      setFilteredPokemon([]);
    }
  }, 300);

  useEffect(() => {
    fetchPokeList();
    handleSearch(searchTerm);
  }, [searchTerm]);
  
  const fetchPokeList = async () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1302')
      .then((response) => {
        const names = response.data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list:', error);
      });
  };

  const handleSelect = (name) => {
    setSearchTerm(name);
    setFilteredPokemon([]);
    if (onPokemonSelect) onPokemonSelect(name);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokémon..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        aria-label="Search Pokémon"
      />
      {filteredPokemon.length > 0 && (
        <SuggestionsList
          suggestions={filteredPokemon}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};