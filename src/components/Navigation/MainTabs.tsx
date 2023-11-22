import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../utils/enums";

import CharactersStacks from "./CharactersStacks";
import HomeScreen from "../../screens/HomeScreen";
import AddCharacterScreen from "../../screens/AddCharacterScreen";
import CustomCharactersStacks from "./CustomCharactersStacks";

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={COLORS.light.secondary}
      inactiveColor={COLORS.light.main}
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
        name="CharactersTab"
        component={CharactersStacks}
        options={{
          tabBarLabel: "Characters",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CustomCharactersTab"
        component={CustomCharactersStacks}
        options={{
          tabBarLabel: "My Characters",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pirate" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
