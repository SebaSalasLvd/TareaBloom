import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const SearchBar = ({ onPokemonSelect }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState([]);
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=1302')
        .then((response) => {
          const names = response.data.results.map((pokemon) => pokemon.name);
          setPokemonList(names);
        })
        .catch((error) => {
          console.error('Error fetching Pokémon list:', error);
        });
    }, []);

    useEffect(() => {
      if (searchTerm) {
        const filtered = pokemonList.filter((name) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemon(filtered.slice(0, 5));
      } else {
        setFilteredPokemon([]);
      }
    }, [searchTerm, pokemonList]);
  
    const handleSelect = (name) => {
      setSearchTerm(name);
      setFilteredPokemon([]);
      if (onPokemonSelect) onPokemonSelect(name);
    };
    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Input de búsqueda */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Pokémon..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Lista de sugerencias */}
            {filteredPokemon.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                {filteredPokemon.map((name) => (
                    <li
                    key={name}
                    onClick={() => handleSelect(name)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                    {name}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}