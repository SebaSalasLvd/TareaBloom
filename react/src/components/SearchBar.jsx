import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { SuggestionsList } from '../components/SuggestionsList';

/**
 * SearchBar component allows users to search for Pokémon by name.
 * 
 * This component fetches a list of Pokémon names from the PokéAPI and displays a search input field.
 * As the user types, the component filters the Pokémon list and displays suggestions that match the search term.
 * The user can select a Pokémon from the suggestions, which triggers the `onPokemonSelect` callback.
 * 
 * @component
 * @example
 * const handlePokemonSelect = (pokemonName) => {
 *   console.log(`Selected Pokémon: ${pokemonName}`);
 * };
 * return <SearchBar onPokemonSelect={handlePokemonSelect} />;
 * 
 * @param {Object} props - The props for the component.
 * @param {Function} props.onPokemonSelect - Callback function triggered when a Pokémon is selected.
 * @returns {JSX.Element} A search bar with Pokémon suggestions.
 */
export const SearchBar = ({ onPokemonSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);


  /**
   * Fetches the list of all Pokémon from the PokéAPI and stores the names.
   */
  useEffect(() => {
    fetchPokeList();
    handleSearch(searchTerm);
  }, [searchTerm]);
  
  /**
   * Fetches the list of Pokémon names from the PokéAPI.
   * 
   * @returns {Promise<void>}
   */
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

  /**
   * Filters the Pokémon list based on the search term.
   * The search is debounced to improve performance and avoid excessive API calls.
   * 
   * @param {string} term - The search term to filter Pokémon names.
   */
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
  
  /**
   * Handles the selection of a Pokémon from the suggestions list.
   * Sets the selected Pokémon name in the search input and clears the suggestions list.
   * 
   * @param {string} name - The name of the selected Pokémon.
   */
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