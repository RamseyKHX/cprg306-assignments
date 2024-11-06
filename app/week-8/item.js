export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            onClick={() => onSelect(name)}
            className="bg-gray-800 text-white p-2 mb-4 rounded-lg shadow-md border border-gray-700 w-1/4 mx-0 cursor-pointer"
        >
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-300">Quantity: {quantity}</div>
            <div className="text-sm text-gray-300">Category: {category}</div>
        </li>
    );
}
