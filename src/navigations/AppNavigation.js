import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import { useTheme } from "../theme/useTheme";
import { getNavigationTheme } from "../theme/theme";

const Stack = createStackNavigator();

function MainNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          color: theme.colors.text,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      <Stack.Screen name="Ingredient" component={IngredientScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 250,
          backgroundColor: theme.colors.surface,
        },
        drawerActiveTintColor: theme.colors.text,
        drawerInactiveTintColor: theme.colors.textMuted,
      }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  const { theme } = useTheme();
  const navTheme = getNavigationTheme(theme);

  return (
    <NavigationContainer theme={navTheme}>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;