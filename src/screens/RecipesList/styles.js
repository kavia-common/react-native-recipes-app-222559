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
  });
}
