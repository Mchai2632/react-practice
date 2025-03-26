import { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) throw new Error("useTheme must be used within a Provider");

    return theme;
};
