import { StyleSheet } from "react-native";

/**
 * PUBLIC_INTERFACE
 * Create MenuButton styles for the current theme.
 */
export function makeStyles(theme) {
  return StyleSheet.create({
    btnClickContain: {
      flexDirection: "row",
      padding: 5,
      marginTop: 5,
      marginBottom: 5,
    },
    btnContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
    },
    btnIcon: {
      height: 25,
      width: 25,
      tintColor: theme.colors.icon,
    },
    btnText: {
      fontSize: 16,
      marginLeft: 10,
      marginTop: 2,
      color: theme.colors.text,
    },
  });
}
