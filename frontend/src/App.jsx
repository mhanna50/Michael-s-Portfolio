import React from "react";
import Home from "./pages/home";
import Blog from "./pages/blog";
import BlogPost from "./components/BlogTools/BlogPost";

function App() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  // Normalize path (remove trailing slash)
  const cleanPath = pathname.replace(/\/+$/, "");

  // Match single blog post like /blog/my-first-post
  const blogPostMatch = cleanPath.match(/^\/blog\/([^/]+)$/);

  if (cleanPath === "/blog") {
    return <Blog />;
  }

  if (blogPostMatch) {
    const slug = blogPostMatch[1];
    return <BlogPost slug={slug} />;
  }

  return <Home />;
}

export default App;
