// api/weather.js
// Node.js Serverless Function (works for a React SPA on Vercel)
// Uses OpenWeather (https://api.openweathermap.org)

const ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";

module.exports = async (req, res) => {
  try {
    const lat = process.env.WEATHER_LAT;   // e.g. "39.7392"
    const lon = process.env.WEATHER_LON;   // e.g. "-75.5398"
    const key = process.env.WEATHER_API_KEY;

    if (!lat || !lon || !key) {
      res.status(500).json({ error: "Missing WEATHER_LAT, WEATHER_LON, or WEATHER_API_KEY" });
      return;
    }

    const url = `${ENDPOINT}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const r = await fetch(url, { headers: { "User-Agent": "portfolio-weather/1.0" } });

    if (!r.ok) {
      res.status(502).json({ error: "Weather fetch failed" });
      return;
    }

    const data = await r.json();
    const out = {
      city: data.name,
      condition: (data.weather?.[0]?.main || "Unknown").toLowerCase(), // "clear" | "clouds" | "rain" | ...
      description: data.weather?.[0]?.description || "",
      tempC: Math.round(data.main?.temp ?? 0),
      updatedAt: new Date().toISOString(),
    };

    // Edge/CDN cache for 30 min, allow 5 min stale while we revalidate
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=300");
    res.status(200).json(out);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
