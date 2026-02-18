import { StyleSheet } from "react-native";
import { getRecipeCardStyles } from "../../AppStyles";

/**
 * PUBLIC_INTERFACE
 * Create screen styles for the current theme.
 */
export function makeStyles(theme) {
  const card = getRecipeCardStyles(theme);

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    headerDivider: {
      borderBottomWidth: 0.4,
      marginBottom: 10,
      borderBottomColor: theme.colors.borderStrong,
    },
    titleIngredient: {
      fontWeight: "bold",
      fontSize: 20,
      color: theme.colors.text,
    },
    photoIngredient: {
      width: "100%",
      height: 250,
      alignSelf: "center",
    },
    ingredientInfo: {
      color: theme.colors.text,
      margin: 10,
      fontSize: 19,
      textAlign: "left",
      fontWeight: "bold",
    },
    container: card.container,
    photo: card.photo,
    title: card.title,
    category: card.category,
  });
}