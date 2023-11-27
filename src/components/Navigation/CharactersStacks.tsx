import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CharactersScreen from "../../screens/CharactersScreen";
import CharacterScreen from "../../screens/CharacterScreen";
import { COLORS, SCREENS } from "../../utils/enums";
import { useAppSelector } from "../../store/hooks";

const Stack = createNativeStackNavigator();

const CharacterStacks = ({ navigation }) => {
  const character = useAppSelector((state) => state.characters.value.character);

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.CHARACTERS}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.light.main,
        },
        headerTintColor: COLORS.light.accent,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={SCREENS.CHARACTERS}
        component={CharactersScreen}
        initialParams={{ page: "1" }}
      />

      <Stack.Screen
        name={SCREENS.CHARACTER}
        component={CharacterScreen}
        options={{ title: character?.name ?? "Character" }}
      />
    </Stack.Navigator>
  );
};

export default CharacterStacks;
