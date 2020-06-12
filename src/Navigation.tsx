import HomeScreen from "./components/screens/HomeScreen";
import GlobeIcon from "./components/icons/GlobeIcon";
import ClockIcon from "./components/icons/ClockIcon";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: "#c6a9b6",
      }}
    >
      <Tab.Screen
        name="Overview"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <GlobeIcon color={focused ? "#e91e63" : "#c6a9b6"} />
          ),
        }}
      />
      <Tab.Screen
        name="Clock-In"
        component={HomeScreen}
        options={{
          title: "Clock-In",
          tabBarIcon: ({ focused }) => (
            <ClockIcon color={focused ? "#e91e63" : "#c6a9b6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;