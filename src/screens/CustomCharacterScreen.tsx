import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCustomCharacter } from "../store/characterSlice";
import { ICustomCharacter } from "../types/customCharacters";
import { COLORS, SCREENS, STATUS_COLOR } from "../utils/enums";

import Loader from "../components/Loader";
import Button from "../components/Button";
import FloatingButton from "../components/FloatingButton";

const CustomCharacterScreen = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const character = useAppSelector(
    (state) => state.characters.value.character
  ) as ICustomCharacter;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const onGoBack = () => {
    navigation.navigate(SCREENS.CUSTOM_CHARACTERS);
  };

  const onEdit = () => {
    navigation.navigate(SCREENS.FORM_CUSTOM_CHARACTER, {
      editionMode: true,
      character,
    });
  };

  const onDelete = () => {
    Alert.alert(
      "Confirm delete character",
      `You want to delete ${character.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: deleteCharacter,
        },
      ]
    );
  };

  const deleteCharacter = () => {
    dispatch(deleteCustomCharacter({ id: character.id }));

    navigation.navigate(SCREENS.CUSTOM_CHARACTERS);
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
                {
                  backgroundColor: STATUS_COLOR[character?.status],
                },
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
              <Text style={[styles.value]}>{character?.origin}</Text>
            </View>
          </View>
          <Button
            label="Go back!"
            onPress={onGoBack}
            style={{
              width: 110,
              alignSelf: "center",
              margin: 10,
              backgroundColor: COLORS.light.accent,
            }}
          />
          <FloatingButton
            position={{ right: 10, bottom: 70 }}
            icon="account-edit"
            backgroundColor={COLORS.light.accent}
            onPress={onEdit}
          />
          <FloatingButton
            position={{ right: 10, bottom: 10 }}
            icon="delete"
            backgroundColor={COLORS.commons.red}
            onPress={onDelete}
          />
        </>
      )}
    </View>
  );
};

export default CustomCharacterScreen;

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
    backgroundColor: COLORS.light.secondary,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.light.accent,
    textTransform: "capitalize",
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
});
