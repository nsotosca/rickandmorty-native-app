import { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCharacter } from "../store/characterSlice";
import { COLORS, SCREENS } from "../utils/enums";
import { ICustomCharacter } from "../types/customCharacters";

import CharacterList from "../components/CharacterList";
import Button from "../components/Button";
import NoData from "../components/NoData";
import FloatingButton from "../components/FloatingButton";

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

  const addItem = () => {
    navigation.navigate(SCREENS.FORM_CUSTOM_CHARACTER);
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

            <FloatingButton
              icon="account-plus"
              position={{ right: 10, bottom: 10 }}
              onPress={addItem}
              backgroundColor={COLORS.light.accent}
            />
          </>
        ) : (
          <View style={[styles.noData]}>
            <NoData message="This is empty, Rick!" />
            <Button label="Add new character" onPress={addItem} />
          </View>
        )}
      </>
    </SafeAreaView>
  );
};

export default CustomCharactersScreen;

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
