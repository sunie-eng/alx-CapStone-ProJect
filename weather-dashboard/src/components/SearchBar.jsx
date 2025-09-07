import { useState } from "react";

function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onSearch(cityInput);
      setCityInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter city..."
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        className="border rounded-lg p-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
