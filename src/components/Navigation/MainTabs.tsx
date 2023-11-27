import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../utils/enums";

import HomeScreen from "../../screens/HomeScreen";
import CharactersStacks from "./CharactersStacks";
import CustomCharactersStacks from "./CustomCharactersStacks";

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={COLORS.light.accent}
      inactiveColor={COLORS.light.accent}
      barStyle={{
        backgroundColor: COLORS.light.secondary,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CharactersStacks"
        component={CharactersStacks}
        options={{
          tabBarLabel: "Characters",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={26} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("CharactersStacks", { screen: "Characters" });
          },
        })}
      />
      <Tab.Screen
        name="CustomCharactersStacks"
        component={CustomCharactersStacks}
        options={{
          tabBarLabel: "My Characters",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pirate" color={color} size={26} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("CustomCharactersStacks", {
              screen: "CustomCharacters",
            });
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
