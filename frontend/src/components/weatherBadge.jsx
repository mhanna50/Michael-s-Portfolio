// src/components/WeatherBadge.jsx
import React from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
  CloudDrizzle,
  Moon,
} from "lucide-react";

const toRgba = (hex, alpha) => {
  if (!hex || typeof hex !== "string") return undefined;
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return undefined;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const iconForCondition = (conditionRaw) => {
  if (!conditionRaw) return Cloud;
  const condition = conditionRaw.toLowerCase();
  if (condition.includes("storm") || condition.includes("thunder")) return CloudLightning;
  if (condition.includes("dark") || condition.includes("night")) return Moon;
  if (condition.includes("rain") || condition.includes("shower")) return CloudRain;
  if (condition.includes("drizzle")) return CloudDrizzle;
  if (condition.includes("snow") || condition.includes("sleet")) return CloudSnow;
  if (condition.includes("fog") || condition.includes("mist") || condition.includes("haze")) return CloudFog;
  if (condition.includes("clear") || condition.includes("sun")) return Sun;
  return Cloud;
};

const labelForCondition = (conditionRaw, isNight = false) => {
  if (isNight) return "night";
  if (!conditionRaw) return "unknown";
  return conditionRaw.toLowerCase();
};

const toFahrenheit = (celsius) => {
  if (typeof celsius !== "number" || Number.isNaN(celsius)) return null;
  return Math.round((celsius * 9) / 5 + 32);
};

export default function WeatherBadge({ weather, theme }) {
  const accent = theme?.accent;
  const badgeStyle = accent
    ? {
        color: accent,
        backgroundColor: toRgba(accent, 0.15),
      }
    : undefined;

  if (!weather) {
    return (
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[rgba(79,70,229,0.12)] text-[#4f46e5]"
        style={badgeStyle}
      >
        <span className="animate-pulse">Fetching weather...</span>
      </div>
    );
  }

  const { city, condition, tempC, isNight, source } = weather;
  const Icon = iconForCondition(isNight ? "night" : condition);
  const label = labelForCondition(condition, isNight);
  const tempF = toFahrenheit(tempC);
  const showTemperature = source !== "manual";

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[rgba(79,70,229,0.12)] text-[#4f46e5]"
      style={badgeStyle}
    >
      <Icon className="h-4 w-4" />
      <span className="capitalize">{label}</span>
      {showTemperature && (
        <>
          <span>•</span>
          <span>{typeof tempF === "number" ? `${tempF}°F` : `${tempC}°C`}</span>
        </>
      )}
      {city && (
        <>
          <span>•</span>
          <span className="font-medium">{city}</span>
        </>
      )}
    </div>
  );
}
