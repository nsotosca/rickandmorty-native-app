import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";

import { useAppSelector } from "../../store/hooks";
import { COLORS } from "../../utils/enums";

import CustomCharactersScreen from "../../screens/CustomCharactersScreen";
import CustomCharacterScreen from "../../screens/CustomCharacterScreen";
import AddCharacterScreen from "../../screens/AddCharacterScreen";

const Stack = createNativeStackNavigator();

const resetRoute = ({ navigation, route }) => ({
  blur: () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "CustomCharacters" }],
      })
    );
  },
});

export const CustomCharactersStacks = () => {
  const store = useAppSelector((state) => state.characters.value);

  return (
    <Stack.Navigator
      initialRouteName="CustomCharacters"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.light.main,
        },
        headerTintColor: COLORS.light.accent,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="CustomCharacters"
        component={CustomCharactersScreen}
        options={{
          headerShown: !!store.customCharacters.length,
          title: "My Characters",
        }}
      />

      <Stack.Screen
        name="CustomCharacter"
        component={CustomCharacterScreen}
        listeners={resetRoute}
        options={{ title: store.character?.name ?? "" }}
      />

      <Stack.Screen
        name="AddCustomCharacter"
        component={AddCharacterScreen}
        options={{
          headerShown: false,
        }}
        listeners={resetRoute}
      />
    </Stack.Navigator>
  );
};

export default CustomCharactersStacks;
