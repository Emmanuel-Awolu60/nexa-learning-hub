function WeatherCard({ weather }) {
  return (
    <section className="card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p className="temp">{weather.temperature}°C</p>
      <p>{weather.description}</p>
      <ul>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind} km/h</li>
      </ul>
    </section>
  );
}

export default WeatherCard;
