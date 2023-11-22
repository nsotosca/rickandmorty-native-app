import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCharacter } from "../store/characterSlice";
import { COLORS, SCREENS } from "../utils/enums";
import { ICustomCharacter } from "../types/customCharacters";

import CharacterList from "../components/CharacterList";
import Button from "../components/Button";
import NoData from "../components/NoData";

const CustomCharactersScreen = ({ navigation }) => {
  const characters = useAppSelector(
    (state) => state.characters.value.customCharacters
  );
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const onPressItem = (characterSelected: ICustomCharacter) => {
    dispatch(selectCharacter(characterSelected));

    navigation.navigate(SCREENS.CUSTOM_CHARACTER);
  };

  const onAddItem = () => {
    navigation.navigate(SCREENS.ADD_CUSTOM_CHARACTER);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        {characters.length ? (
          <>
            <CharacterList
              characters={characters}
              onPressItem={onPressItem}
              loading={isLoading}
            />

            <TouchableWithoutFeedback onPress={onAddItem}>
              <View style={[styles.buttonAdd]}>
                <MaterialCommunityIcons
                  name="account-plus"
                  color="#FAFAFA"
                  size={30}
                />
              </View>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <View style={[styles.noData]}>
            <NoData message="This is empty, Rick!" />
            <Button label="Add new character" onPress={onAddItem} />
          </View>
        )}
      </>
    </SafeAreaView>
  );
};

export default CustomCharactersScreen;

const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: COLORS.light.secondary,
    borderRadius: 100,
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
    elevation: 4,
  },
  noData: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
