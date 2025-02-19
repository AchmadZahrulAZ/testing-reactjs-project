import React, { useContext, createContext } from 'react';

const ThemeContext = createContext();

export function themeProvider({ children, value }) {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}