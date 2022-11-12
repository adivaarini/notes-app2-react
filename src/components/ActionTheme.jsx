import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ActionTheme() {
  const { theme, actionTheme } = useContext(ThemeContext);

  return (
    <>
      <button type="button" onClick={actionTheme} className="action-theme">
        {theme === "dark" && <MdDarkMode size={36} />}
        {theme === "light" && <MdOutlineLightMode size={36} />}
      </button>
    </>
  );
}