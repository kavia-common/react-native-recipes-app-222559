import { StyleSheet } from "react-native";

/**
 * PUBLIC_INTERFACE
 * Create drawer styles for the current theme.
 */
export function makeStyles(theme) {
  return StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.surface,
    },
    container: {
      flex: 1,
      alignItems: "flex-start",
      paddingHorizontal: 20,
    },
  });
}
