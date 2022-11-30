import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkModes, setDarkModes] = useState(
    () => localStorage.theme === "dark"
  );
  const toggleDarkModes = (isDarkModes: boolean) => {
    setDarkModes(!isDarkModes);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkModes ? "light" : "dark";
    html.classList.remove(prev);
    const next = isDarkModes ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [isDarkModes]);
  return {isDarkModes, toggleDarkModes};
};
export default useDarkMode;
