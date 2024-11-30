import { CustomChip } from "../templates/CustomChip";
/**
 * `PokemonCard` is a functional React component that displays a Pokémon's information, 
 * including its name, types, and an image.
 *
 * @component
 * @example
 * // Example usage:
 * <PokemonCard name="Pikachu" types={[{ type: "electric" }]} image="path_to_image" />
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the Pokémon (e.g., "Pikachu").
 * @param {Array} props.types - An array of objects representing the Pokémon's types. 
 * Each object should have a `type` property indicating the type name (e.g., "electric").
 * @param {string} props.image - The URL of the Pokémon's image.
 *
 * @returns {JSX.Element} - A JSX element representing the card with the Pokémon's information.
 */
export const PokemonCard = ({name, types, image}) => {
    /**
     * Capitalizes the first letter of a string.
     * 
     * @param {string} str - The string to capitalize.
     * @returns {string} - The string with the first letter capitalized.
     */
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <>
            <div className={'w-full flex justify-center bg-white p-8 rounded-lg shadow-sm border'}>
                <div className={'w-full flex flex-col gap-5'}>
                    <h1 className={'font-serif text-4xl'}>{capitalizeFirstLetter(name)}</h1>
                    <div className={'flex flex-col gap-2'}>
                        <div className="flex justify-start gap-2">
                            {types.map((data, idx) => (
                                <CustomChip
                                    key = {idx}
                                    type = {data.type}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Image" />
                    </div>
                </div>
            </div>
        </>
    );
};