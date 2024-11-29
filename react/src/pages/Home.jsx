import {useEffect, useState} from 'react';
import axios from 'axios';
import { PokemonCard } from '../components/PokemonCard';
import { SearchBar } from '../components/SearchBar';
export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const handlePokemonSelect = (pokemonName) => {
    setSelectedPokemon(pokemonName);
    console.log(`Selected Pokémon: ${pokemonName}`);
  };

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonInfo();
    }
  }, [selectedPokemon]);

  const fetchPokemonInfo = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      const name = response.data.name;
      const types = response.data.types.map((typeInfo) => ({
        type: typeInfo.type.name,
      }));
      const image = response.data.sprites.other["official-artwork"].front_default;
      setPokemonInfo({ name, types, image }); 
    } catch (error) {
      console.error("Error fetching Pokémon", error);
      alert("Error fetching Pokémon");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-gray-700 to-white p-4">
      <h1 className="text-4xl font-serif text-white mb-4">Pokémon Search</h1>
      <SearchBar onPokemonSelect={handlePokemonSelect} />
      {selectedPokemon && pokemonInfo && (
        <div className="mt-6 p-4 bg-gray-300 rounded-md shadow-md">
          <div>
            <PokemonCard
              name={pokemonInfo.name}
              types={pokemonInfo.types}
              image={pokemonInfo.image}
            />
          </div>
        </div>
      )}
    </div>
  );
};