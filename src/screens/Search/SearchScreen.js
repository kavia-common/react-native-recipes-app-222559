import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import { makeStyles } from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";
import { useTheme } from "../../theme/useTheme";

export default function SearchScreen(props) {
  const { navigation } = props;
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    setValue(text);
    const recipeArray1 = getRecipesByRecipeName(text);
    const recipeArray2 = getRecipesByCategoryName(text);
    // kept for potential future usage consistency; currently not concatenated in original code
    getRecipesByIngredientName(text);
    const aux = recipeArray1.concat(recipeArray2);
    const recipeArray = [...new Set(aux)];

    if (text === "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../../assets/icons/search.png")}
          />
          <TextInput style={styles.searchInput} onChangeText={handleSearch} value={value} />
          <Pressable onPress={() => handleSearch("")}>
            <Image
              style={styles.searchIcon}
              source={require("../../../assets/icons/close.png")}
            />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [navigation, styles, value]);

  useEffect(() => {}, [value]);

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
        data={data}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
