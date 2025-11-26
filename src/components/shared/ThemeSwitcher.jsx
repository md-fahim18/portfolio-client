import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-500 to-blue-600 dark:from-amber-500 dark:to-orange-400 text-white"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        // Sun Icon
        <svg
          className="w-7 h-7 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M16.66 16.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M16.66 7.34l2.12-2.12"
          />
        </svg>
      ) : (
        // Moon Icon
        <svg
          className="w-7 h-7 animate-spin-slow"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
