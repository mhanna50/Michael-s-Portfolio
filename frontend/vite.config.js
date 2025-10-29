import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const require = createRequire(import.meta.url);
const { fetchWeatherData } = require('../api/weatherService.js');

function weatherDevProxy() {
  return {
    name: 'weather-dev-proxy',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/weather', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        try {
          const payload = await fetchWeatherData({
            lat: process.env.WEATHER_LAT,
            lon: process.env.WEATHER_LON,
            key: process.env.WEATHER_API_KEY,
          });

          res.statusCode = 200;
          res.end(JSON.stringify(payload));
        } catch (err) {
          const status = err?.statusCode || 500;
          res.statusCode = status;
          res.end(JSON.stringify({ error: err?.message || 'Weather service failure' }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), weatherDevProxy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
