import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") return;
    onSearch(city.trim());
    setCity("");
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Type a city, e.g. Lagos"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
