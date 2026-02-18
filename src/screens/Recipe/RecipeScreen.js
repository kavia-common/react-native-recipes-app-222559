import React, { useLayoutEffect, useMemo, useRef } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { makeStyles } from "./styles";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { useTheme } from "../../theme/useTheme";

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
  const { navigation, route } = props;
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);
  const slider1Ref = useRef(null);
  const progress = useSharedValue(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const onPressIngredient = (item) => {
    const name = getIngredientName(item);
    const ingredient = item;
    navigation.navigate("Ingredient", { ingredient, name });
  };

  const onPressPagination = (index) => {
    slider1Ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={(c) => {
              slider1Ref.current = c;
            }}
            loop={false}
            width={viewportWidth}
            height={viewportWidth}
            autoPlay={false}
            data={item.photosArray}
            scrollAnimationDuration={1000}
            renderItem={renderImage}
            onProgressChange={progress}
          />
          <Pagination.Basic
            renderItem={() => (
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,1)",
                  flex: 1,
                }}
              />
            )}
            progress={progress}
            data={item.photosArray}
            dotStyle={styles.paginationDot}
            containerStyle={styles.paginationContainer}
            onPress={onPressPagination}
          />
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("RecipesList", { category, title })
            }
          >
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/time.png")}
          />
          <Text style={styles.infoRecipe}>{item.time} minutes </Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              const ingredients = item.ingredients;
              const title = "Ingredients for " + item.title;
              navigation.navigate("IngredientsDetails", { ingredients, title });
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}