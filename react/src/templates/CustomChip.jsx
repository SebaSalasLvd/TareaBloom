import { Chip } from "@nextui-org/react";
import { PokemonTypeClasses } from "../components/PokemonTypeClasses";

/**
 * CustomChip component that displays a styled chip with a Pokémon type.
 * 
 * This component renders a `Chip` from NextUI with a background color and text style 
 * based on the type of Pokémon passed as a prop. It also capitalizes the first letter 
 * of the type to present it in a readable format.
 * 
 * @component
 * @example
 * return <CustomChip type="fire" />;
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.type - The Pokémon type to display on the chip (e.g., "fire", "water", etc.).
 * 
 * @returns {JSX.Element} A `Chip` element with the appropriate style and type name.
 */
export const CustomChip = ({ type }) => {
  /**
   * The `PokemonTypeClasses` object contains class names for different Pokémon types.
   * @type {Object}
   */
  const pokemonTypeClasses = PokemonTypeClasses;

  /**
   * The class name for the Pokémon type chip, which is determined based on the `type` prop.
   * Defaults to "bg-gray-200 text-black" if no matching class is found.
   * @type {string}
   */
  const className = pokemonTypeClasses[type] || "bg-gray-200 text-black";

  /**
   * Capitalizes the first letter of a string.
   * 
   * @param {string} str - The string to capitalize.
   * @returns {string} The string with the first letter capitalized.
   */
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      <Chip className={`min-w-[12vw] h-10 px-4 text-lg roboto-medium line-clamp-1 text-center ${className}`}>
        {capitalizeFirstLetter(type)}
      </Chip>
    </div>
  );
};