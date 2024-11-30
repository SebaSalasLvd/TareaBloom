/**
 * A mapping of Pokémon types to corresponding CSS classes for styling.
 * Each type is associated with a background color and text color used in the UI.
 * The values are used to dynamically apply styles to elements representing Pokémon types.
 * 
 * @constant
 * @type {Object<string, string>}
 * @example
 * // Usage in a component
 * <div className={PokemonTypeClasses.fire}>Fire Type</div>
 * 
 */
export const PokemonTypeClasses = {
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
    steel: "bg-gray-400 text-white",
    fairy: "bg-pink-300 text-black",
    normal: "bg-gray-300 text-black",
  };