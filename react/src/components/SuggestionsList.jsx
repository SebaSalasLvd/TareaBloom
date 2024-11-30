
/**
 * SuggestionsList component renders a list of suggestions that the user can select from.
 * 
 * This component displays an unordered list (`<ul>`) with list items (`<li>`) based on the 
 * `suggestions` prop. Each list item is clickable and triggers the `onSelect` callback with 
 * the selected suggestion when clicked.
 * 
 * @component
 * @example
 * const suggestions = ["Pikachu", "Bulbasaur", "Charmander"];
 * const handleSelect = (name) => console.log(name);
 * return <SuggestionsList suggestions={suggestions} onSelect={handleSelect} />;
 * 
 * @param {Object} props - The props for the component.
 * @param {Array<string>} props.suggestions - An array of suggestion names to display in the list.
 * @param {Function} props.onSelect - A callback function that is triggered when a suggestion is selected.
 * @returns {JSX.Element} A styled list of suggestions.
 */
export const SuggestionsList = ({ suggestions, onSelect }) => (
    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
        {suggestions.map((name) => (
            <li
                key={name}
                onClick={() => onSelect(name)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
                {name}
            </li>
        ))}
    </ul>
);