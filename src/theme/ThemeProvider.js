import React, { createContext, useCallback, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import PropTypes from "prop-types";
import { themes } from "./theme";

export const ThemeContext = createContext({
  theme: themes.light,
  mode: "light",
  setMode: () => {},
  toggleMode: () => {},
});

/**
 * ThemeProvider manages app theme state (light/dark/system).
 * Default behavior: follow the device color scheme.
 */
export default function ThemeProvider({ children }) {
  const systemScheme = useColorScheme(); // 'light' | 'dark' | null
  const [mode, setMode] = useState("system"); // 'light' | 'dark' | 'system'

  const effectiveMode = mode === "system" ? systemScheme || "light" : mode;
  const theme = effectiveMode === "dark" ? themes.dark : themes.light;

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const currentEffective = prev === "system" ? systemScheme || "light" : prev;
      return currentEffective === "dark" ? "light" : "dark";
    });
  }, [systemScheme]);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
      toggleMode,
    }),
    [theme, mode, toggleMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
