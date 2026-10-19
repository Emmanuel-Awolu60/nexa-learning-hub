// This file only gets data. The components only show it.

// Turn the weather code from the API into words
function describeCode(code) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code === 45 || code === 48) return "Foggy";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code === 85 || code === 86) return "Snow showers";
  if (code >= 95) return "Thunderstorm";
  return "Unknown";
}

export async function getWeather(city) {
  // Step 1: find the city's latitude and longitude
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );
  const geoData = await geoResponse.json();

  if (!geoData.results) {
    throw new Error("City not found");
  }

  const { name, country, latitude, longitude } = geoData.results[0];

  // Step 2: ask for the current weather at that place
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );
  const weatherData = await weatherResponse.json();
  const current = weatherData.current;

  return {
    city: name,
    country: country,
    temperature: current.temperature_2m,
    humidity: current.relative_humidity_2m,
    wind: current.wind_speed_10m,
    description: describeCode(current.weather_code)
  };
}
