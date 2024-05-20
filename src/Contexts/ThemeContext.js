import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSideMenuActive(false);
      if (window.scrollY > 0) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSideMenu = () => {
    setSideMenuActive(!sideMenuActive);
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkTheme(!darkTheme);
  };

  const value = {
    sideMenuActive,
    toggleSideMenu,
    headerActive,
    toggleTheme,
    darkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
