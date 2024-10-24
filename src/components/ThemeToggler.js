import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedThemePreference = localStorage.getItem('theme');
    if (savedThemePreference === 'dark') {
      setIsDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="theme-toggler">
      <div
        onClick={toggleTheme}
        className={`theme-toggle-button ${isDarkTheme ? 'is-dark' : ''}`}
      >
        <FaSun className="theme-icon sun" />
        <FaMoon className="theme-icon moon" />
      </div>
    </div>
  );
};

export default ThemeToggler;
