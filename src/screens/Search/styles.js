import { StyleSheet } from "react-native";
import { getRecipeCardStyles } from "../../AppStyles";

/**
 * PUBLIC_INTERFACE
 * Create screen styles for the current theme.
 */
export function makeStyles(theme) {
  const card = getRecipeCardStyles(theme);

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: card.container,
    photo: card.photo,
    title: card.title,
    category: card.category,

    btnIcon: {
      height: 14,
      width: 14,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.inputBackground,
      borderRadius: 10,
      width: 250,
      justifyContent: "space-around",
    },
    searchIcon: {
      width: 20,
      height: 20,
      tintColor: theme.colors.icon,
    },
    searchInput: {
      backgroundColor: theme.colors.inputBackground,
      color: theme.colors.inputText,
      width: 180,
      height: 50,
    },
  });
}
