import { Chip } from "@nextui-org/react";

export const CustomChip = ({ type }) => {
  const pokemonTypeClasses = {
    fire: "bg-red-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    fighting: "bg-red-700 text-white",
    poison: "bg-purple-500 text-white",
    ground: "bg-yellow-700 text-white",
    flying: "bg-indigo-300 text-black",
    psychic: "bg-pink-500 text-white",
    bug: "bg-lime-500 text-black",
    rock: "bg-gray-700 text-white",
    ghost: "bg-indigo-700 text-white",
    dark: "bg-gray-900 text-white",
    dragon: "bg-purple-700 text-white",
    steel: "bg-gray-400 text-black",
    fairy: "bg-pink-300 text-black",
    normal: "bg-gray-300 text-black",
  };

  const className = pokemonTypeClasses[type] || "bg-gray-200 text-black";
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      <Chip className={`min-w-[6vw] h-10 px-4 text-sm roboto-medium line-clamp-1 text-center ${className}`}>
        {capitalizeFirstLetter(type)}
      </Chip>
    </div>
  );
};