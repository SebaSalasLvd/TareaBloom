
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