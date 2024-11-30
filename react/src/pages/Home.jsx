import {useEffect, useState} from 'react';
import axios from 'axios';
import { PokemonCard } from '../components/PokemonCard';
import { SearchBar } from '../components/SearchBar';
/**
 * Home component for searching and displaying details of a Pokémon.
 * 
 * This component allows the user to search for a Pokémon by name and displays the selected Pokémon's 
 * name, types, and an image. It fetches the Pokémon data from the PokeAPI when a Pokémon is selected.
 * 
 * @component
 */
export const Home = () => {
  /**
   * State for storing the selected Pokémon's name.
   * @type {string | null}
   */
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  /**
   * State for storing the selected Pokémon's information.
   * @type {Object | null}
   * @property {string} name - The name of the Pokémon.
   * @property {Array<{type: string}>} types - The types of the Pokémon.
   * @property {string} image - The URL of the Pokémon's image.
   */
  const [pokemonInfo, setPokemonInfo] = useState(null);

  /**
   * Handles the selection of a Pokémon from the search bar.
   * 
   * @param {string} pokemonName - The name of the selected Pokémon.
   */
  const handlePokemonSelect = (pokemonName) => {
    setSelectedPokemon(pokemonName);
    console.log(`Selected Pokémon: ${pokemonName}`);
  };

  /**
   * Effect hook to fetch Pokémon data when the selected Pokémon changes.
   * Runs every time `selectedPokemon` is updated.
   */
  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonInfo();
    }
  }, [selectedPokemon]);

  /**
   * Fetches the data for the selected Pokémon from the PokeAPI.
   * 
   * This function makes an API call to the PokeAPI to retrieve the selected Pokémon's data, including 
   * its name, types, and image, and stores this information in the `pokemonInfo` state.
   * If the fetch fails, it logs an error and alerts the user.
   */
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