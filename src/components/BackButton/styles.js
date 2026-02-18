// BackButton/styles.js
import { StyleSheet } from "react-native";

/**
 * PUBLIC_INTERFACE
 * Create BackButton styles for the current theme.
 */
export function makeStyles(theme) {
  return StyleSheet.create({
    btnContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 10,
      margin: 8,
      backgroundColor: theme.colors.card,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    btnIcon: {
      height: 20,
      width: 20,
      tintColor: theme.colors.icon,
    },
  });
}