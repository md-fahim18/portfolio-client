// src/components/Layout/Layout.jsx

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Shared components
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import Loader from "../shared/Loader.jsx";

const Layout = () => {
  // Track current route to detect page changes
  const location = useLocation();

  // Loading state — true when navigating between pages
  const [loading, setLoading] = useState(false);

  // Trigger loading animation every time the route (pathname) changes
  useEffect(() => {
    setLoading(true);

    // Show loader for 500ms → gives smooth transition feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timer if user navigates away quickly
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Full-screen loader overlay — appears during route change */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100">
          {/* You can customize Loader component later */}
          <Loader />
        </div>
      )}

      {/* Main layout structure */}
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar — always visible at top */}
        <Navbar />

        {/* Main content area — grows to fill available space */}
        <main className="flex-1">
          {/* All page components (Home, About, Projects, etc.) render here */}
          <Outlet />
        </main>

        {/* Footer — always sticks to bottom */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;