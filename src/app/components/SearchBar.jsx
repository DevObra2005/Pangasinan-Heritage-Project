export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-heritage-green transition-colors"
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>
    </div>
  );
}