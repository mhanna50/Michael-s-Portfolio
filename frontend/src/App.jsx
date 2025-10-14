import React from "react";
import Home from './pages/home';
import Blog from './pages/blog';

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  if (pathname.replace(/\/+$/, '') === '/blog') {
    return <Blog />;
  }

  return <Home />;
}

export default App;
