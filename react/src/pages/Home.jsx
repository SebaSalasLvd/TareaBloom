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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Pokémon Search</h1>
      {/* Barra de búsqueda */}
      <SearchBar onPokemonSelect={handlePokemonSelect} />
      {/* Mostrar el Pokémon seleccionado */}
      {selectedPokemon && pokemonInfo && (
        <div className="mt-6 p-4 bg-white rounded-md shadow-md">
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