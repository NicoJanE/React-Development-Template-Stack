// components/ClientRouter.js
//
//
// This component ensures that rendering occurs only on the client side,
// which is necessary for a traditional React Router setup within a Next.js application.
//
// Explanation:
// Next.js defaults to server-side rendering (SSR), but React Router is designed for
// client-side rendering (CSR). Without this client-side-only check, React Router
// hooks would be invoked on the server, leading to the following error:
//
// "Warning: Invalid hook call. Hooks can only be called inside of the body of a function component"
//
// By using a client-side check, we prevent React Router from attempting to execute on the server.
//

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the component source of the pages
import Home from './Home';
import About from './About';
import Sample from './Sample';


function ClientRouter() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Define your additional links and routes here, note we don't give them names to make sure they not displayed here		
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/about"></Link>
		<Link to="/sample"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
		<Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default ClientRouter;
