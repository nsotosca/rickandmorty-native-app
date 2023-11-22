import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";

import CharactersScreen from "../../screens/CharactersScreen";
import CharacterScreen from "../../screens/CharacterScreen";
import { COLORS } from "../../utils/enums";
import { useAppSelector } from "../../store/hooks";

const Stack = createNativeStackNavigator();

const resetRoute = ({ navigation, route }) => ({
  blur: () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Characters" }],
      })
    );
  },
});

export const CharacterStacks = ({ navigation }) => {
  const character = useAppSelector((state) => state.characters.value.character);

  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.light.main,
        },
        headerTintColor: COLORS.light.accent,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Characters"
        component={CharactersScreen}
        initialParams={{ page: "1" }}
      />
      <Stack.Screen
        name="Character"
        component={CharacterScreen}
        listeners={resetRoute}
        options={{ title: character?.name ?? "" }}
      />
    </Stack.Navigator>
  );
};

export default CharacterStacks;
