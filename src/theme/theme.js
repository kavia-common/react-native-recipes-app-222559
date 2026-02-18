import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

/**
 * Centralized theme tokens for the app.
 * We keep a small palette and derive component colors from it.
 */
export const themes = {
  light: {
    mode: "light",
    colors: {
      // Base surfaces
      background: "#FFFFFF",
      surface: "#FFFFFF",
      card: "#FFFFFF",

      // Text
      text: "#111827",
      textMuted: "#6B7280",

      // Borders / separators
      border: "#E5E7EB",
      borderStrong: "#D1D5DB",

      // Brand
      primary: "#2cd18a",

      // Utility
      shadow: "#000000",
      inputBackground: "#EDEDED",
      inputText: "#111827",
      icon: "#6B7280",
    },
  },
  dark: {
    mode: "dark",
    colors: {
      // Base surfaces
      background: "#0B1220",
      surface: "#0F172A",
      card: "#111B2E",

      // Text
      text: "#E5E7EB",
      textMuted: "#94A3B8",

      // Borders / separators
      border: "#24324A",
      borderStrong: "#334155",

      // Brand
      primary: "#2cd18a",

      // Utility
      shadow: "#000000",
      inputBackground: "#1F2937",
      inputText: "#E5E7EB",
      icon: "#CBD5E1",
    },
  },
};

/**
 * Returns the React Navigation theme object for the given app theme.
 * This ensures navigator headers, background, etc. match the selected theme.
 */
export function getNavigationTheme(appTheme) {
  const base =
    appTheme?.mode === "dark" ? NavigationDarkTheme : NavigationDefaultTheme;

  return {
    ...base,
    colors: {
      ...base.colors,
      // Map our tokens to navigation colors
      primary: appTheme.colors.primary,
      background: appTheme.colors.background,
      card: appTheme.colors.card,
      text: appTheme.colors.text,
      border: appTheme.colors.border,
      notification: appTheme.colors.primary,
    },
  };
}
