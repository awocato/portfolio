import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";



function DarkToggle() {

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

const loaded = useLoaded();
const { setTheme, resolvedTheme } = useTheme();
const toggleTheme = () =>
  setTheme(resolvedTheme === "dark" ? "light" : "dark");

return (
  loaded && <button onClick={toggleTheme} type="button">
    {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
  </button>
);
}

export default DarkToggle;
