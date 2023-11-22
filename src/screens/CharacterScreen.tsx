import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { ICharacter } from "../core/models";
import { getCharacter } from "../core/api";
import { COLORS, SCREENS, STATUS_COLOR } from "../utils/enums";

import Loader from "../components/Loader";
import Button from "../components/Button";

const CharacterScreen = ({ route, navigation }) => {
  const { id } = route.params as { id?: string };

  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return navigation.navigate(SCREENS.CHARACTERS);
    }

    setIsLoading(true);

    getCharacter(id)
      .then((res) => setCharacter(res))
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onGoBack = () => {
    navigation.navigate(SCREENS.CHARACTERS);
  };

  return (
    <View style={[styles.container]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Image source={{ uri: character?.image }} style={[styles.image]} />
          <View style={[styles.status]}>
            <View
              style={[
                styles.circle,
                { backgroundColor: STATUS_COLOR[character?.status] },
              ]}
            />
            <Text style={[styles.value]}>{character?.status}</Text>
          </View>
          <View style={[styles.details]}>
            <Text style={[styles.title]}>{character?.name}</Text>

            <View style={[styles.detail]}>
              <Text style={[styles.label]}>Gender: </Text>
              <Text style={[styles.value]}>{character?.gender}</Text>
            </View>
            <View style={[styles.detail]}>
              <Text style={[styles.label]}>Origin: </Text>
              <Text style={[styles.value]}>{character?.origin.name}</Text>
            </View>
            <View style={[styles.detail]}>
              <Text style={[styles.label]}>Location: </Text>
              <Text style={[styles.value]}>{character?.location.name}</Text>
            </View>
          </View>
          <Button
            label="Go back!"
            onPress={onGoBack}
            style={{
              width: 110,
              alignSelf: "center",
              margin: 10,
            }}
          />
        </>
      )}
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.main,
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 5,
    overflow: "hidden",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.light.accent,
  },
  details: {
    gap: 10,
  },
  detail: { flexDirection: "row", gap: 4 },
  label: {
    color: COLORS.light.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    color: COLORS.light.accent,
    fontSize: 18,
    fontWeight: "400",
  },
  status: {
    flexDirection: "row",
    gap: 10,
    padding: 5,
    backgroundColor: COLORS.light.main,
    borderRadius: 5,
    position: "absolute",
    top: 320,
    right: 15,
    zIndex: 100,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: COLORS.light.secondary,
    borderRadius: 100,
    height: 15,
    width: 15,
    elevation: 2,
  },
  button: {
    backgroundColor: COLORS.light.secondary,
    borderRadius: 5,
    width: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
  },
  buttonText: {
    color: COLORS.light.main,
    fontSize: 20,
  },
});
