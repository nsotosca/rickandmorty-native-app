import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../utils/enums";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  icon: string;
  position: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  iconColor?: string;
  size?: number;
  backgroundColor?: string;
  onPress?: () => void;
}

const FloatingButton = ({
  icon,
  iconColor = COLORS.commons.white,
  backgroundColor = COLORS.light.secondary,
  size = 30,
  position = {},
  onPress = () => {},
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, position, { backgroundColor }]}>
        <MaterialCommunityIcons name={icon} color={iconColor} size={size} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    elevation: 4,
  },
});
