import React from "react";
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableHighlightProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { COLORS } from "../utils/enums";

interface Props extends TouchableHighlightProps {
  label: string;
  styleText: StyleProp<TextStyle>;
}

const Button = ({ label = "", styleText = {}, ...buttonProps }) => {
  return (
    <TouchableHighlight
      {...buttonProps}
      style={[styles.button, buttonProps.style]}
    >
      <Text style={[styles.buttonText, styleText]}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.light.secondary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: COLORS.light.main,
    fontSize: 20,
  },
});
