import { View, Button, Text } from "react-native";

const Paginator = ({ currentPage, onPressNext, onPressPrevius }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <Button title="Previus page" onPress={onPressPrevius} />
      <Text
        style={{
          color: "#ffd700",
          fontSize: 15,
        }}
      >
        {currentPage}
      </Text>
      <Button title="Next page" onPress={onPressNext} />
    </View>
  );
};

export default Paginator;
