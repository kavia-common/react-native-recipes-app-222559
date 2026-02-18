import React, { useMemo } from "react";
import { TouchableHighlight, Image } from "react-native";
import PropTypes from "prop-types";
import { makeStyles } from "./styles";
import { useTheme } from "../../theme/useTheme";

export default function BackButton(props) {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image
        source={require("../../../assets/icons/backArrow.png")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
