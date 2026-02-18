import { StyleSheet } from "react-native";

/**
 * PUBLIC_INTERFACE
 * Create ViewIngredientsButton styles for the current theme.
 */
export function makeStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: 50,
      width: 270,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 100,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    text: {
      fontSize: 14,
      color: theme.colors.primary,
    },
  });
}
