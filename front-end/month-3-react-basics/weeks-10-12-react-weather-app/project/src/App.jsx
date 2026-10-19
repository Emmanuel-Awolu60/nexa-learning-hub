import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import { getWeather } from "./api.js";

function App() {
  // The data this app remembers
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search for a city
  async function search(city) {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }

    setLoading(false);
  }

  // Load a default city when the app first appears
  useEffect(() => {
    search("Lagos");
  }, []);

  return (
    <main className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={search} />

      {loading && <p className="message">Loading...</p>}
      {error && <p className="message error">{error}</p>}
      {weather && !loading && <WeatherCard weather={weather} />}
    </main>
  );
}

export default App;
