import React from "react";
import Home from "./pages/home";
import Blog from "./pages/blog";
import BlogPost from "./components/BlogTools/BlogPost";
import useWeatherTheme from "./hooks/useWeatherTheme";
import DevWeatherToggle from "./components/DevWeatherToggle";

function App() {
  const { weather, theme, manualCondition, setManualOverride, mainTheme } = useWeatherTheme(); // keeps weather + theme in sync

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  // Normalize path (remove trailing slash)
  const cleanPath = pathname.replace(/\/+$/, "");

  // Match single blog post like /blog/my-first-post
  const blogPostMatch = cleanPath.match(/^\/blog\/([^/]+)$/);
  const devToggle =
    import.meta.env.DEV ? (
      <DevWeatherToggle value={manualCondition} onChange={setManualOverride} />
    ) : null;

  if (cleanPath === "/blog") {
    return (
      <>
        {devToggle}
        <Blog theme={theme} mainTheme={mainTheme} />
      </>
    );
  }

  if (blogPostMatch) {
    const slug = blogPostMatch[1];
    return <BlogPost slug={slug} theme={theme} mainTheme={mainTheme} />;
  }

  // Home route – pass weather-driven theme into sections
  return (
    <>
      {devToggle}
      <Home weather={weather} theme={theme} mainTheme={mainTheme} />
    </>
  );
}

export default App;
