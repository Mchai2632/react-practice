import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

function getThemeFromLocalStorage(): Theme {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme === "dark" || localStorageTheme === "light"
        ? localStorageTheme
        : "light";
}

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage());

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
