import React, { useLayoutEffect, useMemo } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import { makeStyles } from "./styles";
import { getRecipes, getCategoryName } from "../../data/MockDataAPI";
import { useTheme } from "../../theme/useTheme";

export default function RecipesListScreen(props) {
  const { navigation, route } = props;
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, [navigation, route]);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
