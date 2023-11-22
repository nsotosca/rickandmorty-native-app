import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../../utils/enums";

interface Item {
  id: string;
  image: string;
  name: string;
  gender: string;
}

interface Props<T extends Item> {
  character: T;
  onPress: (characterSelected: T) => void;
}

export const CharacterListItem = <T extends Item>({
  character,
  onPress,
}: Props<T>) => {
  return (
    <TouchableWithoutFeedback
      key={character.id}
      onPress={() => onPress(character)}
    >
      <View style={[styles.container]}>
        <Image source={{ uri: character.image }} style={[styles.image]} />
        <View style={[styles.details]}>
          <Text style={[styles.title]}>{character.name}</Text>
          <Text style={[styles.labels]}>{character.gender}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    borderRadius: 5,
    backgroundColor: COLORS.light.main,
    elevation: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.light.secondary,
  },
  details: {
    flex: 1,
    gap: 4,
    paddingVertical: 10,
  },
  title: {
    color: COLORS.light.accent,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 25,
  },
  labels: {
    color: COLORS.light.accent,
    fontSize: 15,
    fontWeight: "normal",
  },
  values: {
    color: "#a3b899",
    fontSize: 10,
  },
});
