import { Chip } from "@nextui-org/react";
import { PokemonTypeClasses } from "../components/PokemonTypeClasses";

export const CustomChip = ({ type }) => {
  const pokemonTypeClasses = PokemonTypeClasses;

  const className = pokemonTypeClasses[type] || "bg-gray-200 text-black";
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      <Chip className={`min-w-[12vw] h-10 px-4 text-lg roboto-medium line-clamp-1 text-center ${className}`}>
        {capitalizeFirstLetter(type)}
      </Chip>
    </div>
  );
};