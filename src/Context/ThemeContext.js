// deps
import React, { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const { isDark, setIsDark } = useLocalStorage();

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

const useTheme = () => {
    return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };