import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

/**
 * PUBLIC_INTERFACE
 * Access the app theme and theme controls.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
