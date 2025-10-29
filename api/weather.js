// api/weather.js
// Node.js Serverless Function (works for a React SPA on Vercel)
// Uses OpenWeather (https://api.openweathermap.org)
const { fetchWeatherData, WeatherConfigError, WeatherFetchError } = require("./weatherService");

module.exports = async (req, res) => {
  try {
    const lat = process.env.WEATHER_LAT;   // e.g. "39.7392"
    const lon = process.env.WEATHER_LON;   // e.g. "-75.5398"
    const key = process.env.WEATHER_API_KEY;

    const out = await fetchWeatherData({ lat, lon, key });
    // Edge/CDN cache for 30 min, allow 5 min stale while we revalidate
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=300");
    res.status(200).json(out);
  } catch (err) {
    const status =
      err instanceof WeatherConfigError || err instanceof WeatherFetchError
        ? err.statusCode
        : 500;
    res.status(status).json({ error: err.message || "Weather service failure" });
  }
};
