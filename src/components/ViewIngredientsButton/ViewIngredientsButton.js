import React, { useMemo } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import PropTypes from "prop-types";
import { makeStyles } from "./styles";
import { useTheme } from "../../theme/useTheme";

export default function ViewIngredientsButton(props) {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>View Ingredients</Text>
      </View>
    </TouchableHighlight>
  );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
