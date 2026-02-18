import React, { useMemo } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { makeStyles } from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { useTheme } from "../../theme/useTheme";

export default function DrawerContainer(props) {
  const { navigation } = props;
  const { theme, toggleMode } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Home" });
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Categories" });
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Search" });
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="TOGGLE THEME"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            toggleMode();
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }),
};