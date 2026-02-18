import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

/**
 * PUBLIC_INTERFACE
 * Returns RecipeCard styles for the current theme.
 */
export function getRecipeCardStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: RECIPE_ITEM_MARGIN,
      marginTop: 20,
      width:
        (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
        recipeNumColums,
      height: RECIPE_ITEM_HEIGHT + 75,
      borderColor: theme.colors.border,
      borderWidth: 0.5,
      borderRadius: 15,
      backgroundColor: theme.colors.card,
    },
    photo: {
      width:
        (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
        recipeNumColums,
      height: RECIPE_ITEM_HEIGHT,
      borderRadius: 15,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    title: {
      flex: 1,
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.colors.text,
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
    },
    category: {
      marginTop: 5,
      marginBottom: 5,
      color: theme.colors.textMuted,
    },
  });
}

/**
 * Backwards-compatible default export used by screens that haven't been migrated yet.
 * (The app now migrates all list screens to use getRecipeCardStyles(theme).)
 */
export const RecipeCard = getRecipeCardStyles({
  colors: {
    border: "#cccccc",
    card: "#FFFFFF",
    text: "#444444",
    textMuted: "#6B7280",
  },
});
