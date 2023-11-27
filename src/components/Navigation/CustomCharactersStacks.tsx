import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppSelector } from "../../store/hooks";
import { COLORS, SCREENS } from "../../utils/enums";

import CustomCharactersScreen from "../../screens/CustomCharactersScreen";
import CustomCharacterScreen from "../../screens/CustomCharacterScreen";
import FormCharacterScreen from "../../screens/FormCharacterScreen";

const Stack = createNativeStackNavigator();

const CustomCharactersStacks = () => {
  const store = useAppSelector((state) => state.characters.value);

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.CUSTOM_CHARACTERS}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.light.main,
        },
        headerTintColor: COLORS.light.accent,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={SCREENS.CUSTOM_CHARACTERS}
        component={CustomCharactersScreen}
        options={{
          headerShown: !!store.customCharacters.length,
          title: "My Characters",
        }}
      />

      <Stack.Screen
        name={SCREENS.CUSTOM_CHARACTER}
        component={CustomCharacterScreen}
        options={{ title: store.character?.name ?? "Character" }}
      />

      <Stack.Screen
        name={SCREENS.FORM_CUSTOM_CHARACTER}
        component={FormCharacterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CustomCharactersStacks;
