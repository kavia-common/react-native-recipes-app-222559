import { StyleSheet } from "react-native";

/**
 * PUBLIC_INTERFACE
 * Create screen styles for the current theme.
 */
export function makeStyles(theme) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    categoriesItemContainer: {
      flex: 1,
      margin: 10,
      justifyContent: "center",
      alignItems: "center",
      height: 215,
      borderColor: theme.colors.border,
      borderWidth: 0.5,
      borderRadius: 20,
      backgroundColor: theme.colors.card,
    },
    categoriesPhoto: {
      width: "100%",
      height: 155,
      borderRadius: 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      shadowColor: "blue",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 3,
    },
    categoriesName: {
      flex: 1,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.colors.text,
      marginTop: 8,
    },
    categoriesInfo: {
      marginTop: 3,
      marginBottom: 5,
      color: theme.colors.textMuted,
    },
  });
}
