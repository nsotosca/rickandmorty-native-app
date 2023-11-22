import { Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../utils/enums";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("CharactersTab");
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={require("../../assets/rickandmortylogo.png")}
        style={[styles.image]}
      />

      <Text style={[styles.title]}>Wellcome to Rick and Morty App!</Text>

      <Button label="Go to Characters!" onPress={onPress} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light.main,
    gap: 20,
  },
  image: {
    width: 250,
    height: 200,
  },
  title: {
    color: COLORS.light.accent,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    width: 300,
  },
});
