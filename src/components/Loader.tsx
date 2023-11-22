import { ActivityIndicator, ActivityIndicatorProps } from "react-native-paper";
import { COLORS } from "../utils/enums";
import { View } from "react-native";

const Loader = ({
  size = "large",
  color = COLORS.light.accent,
  ...props
}: ActivityIndicatorProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={size} color={color} {...props} />
    </View>
  );
};

export default Loader;
