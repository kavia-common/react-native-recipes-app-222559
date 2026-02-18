import { StyleSheet, Dimensions } from "react-native";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

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
    container: {
      flex: 1,
      alignItems: "center",
      margin: RECIPE_ITEM_OFFSET,
      marginTop: 30,
      width:
        (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
      height: RECIPE_ITEM_HEIGHT + 60,
    },
    title: {
      margin: 10,
      marginBottom: 5,
      color: theme.colors.text,
      fontSize: 13,
      textAlign: "center",
    },
    amount: {
      color: theme.colors.textMuted,
    },
    photo: {
      width:
        (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
      height: RECIPE_ITEM_HEIGHT,
      borderRadius: 60,
    },
  });
}
