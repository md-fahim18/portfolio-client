// src/components/router/router.jsx

import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../Layout/Layout.jsx";

// Pages / Sections
import Home from "../home/Home.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";          // adjust if filename different
import Services from "../Services/Services.jsx";
import Projects from "../Projects/Projects.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import Blog from "../Blog/Blog.jsx";

// Shared (Footer links, etc.)
import Footer from "../shared/Footer.jsx";  // if you have separate pages
// import TermsOfUse from "../shared/FooterComponents/TermsOfUse.jsx";
// import PrivacyPolicy from "../shared/FooterComponents/PrivacyPolicy.jsx";

// Optional: 404 page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <div className="text-center">
      <h1 className="text-9xl font-black text-primary">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <a href="/" className="btn btn-primary mt-8">Back to Home</a>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:slug",
        element: <Projects />, // or ProjectDetail component later
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },

      // Optional footer legal pages (uncomment when ready)
      // {
      //   path: "/terms",
      //   element: <TermsOfUse />,
      // },
      // {
      //   path: "/privacy",
      //   element: <PrivacyPolicy />,
      // },
    ],
  },
]);

export default router;