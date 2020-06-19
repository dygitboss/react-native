import HomeScreen from "./components/screens/HomeScreen";
import GlobeIcon from "./components/icons/GlobeIcon";
import ClockIcon from "./components/icons/ClockIcon";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import BeerListingScreen from "./components/screens/Beer/BeerListingScreen";
import BeerSingleScreen from "./components/screens/Beer/BeerSingleScreen";
import { StackCardInterpolationProps } from "@react-navigation/stack/src/types";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BeerNav = () => (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="BeerListing"
        component={BeerListingScreen}
        options={{
          cardStyleInterpolator: ({ current }: StackCardInterpolationProps) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      />
      <Stack.Screen
        name="BeerSingleScreen"
        component={BeerSingleScreen}
        options={{
          cardStyleInterpolator: ({ current }: StackCardInterpolationProps) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      />
    </Stack.Navigator>
  );

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
        name="Beers"
        component={BeerNav}
        options={{
          title: "Beers",
          tabBarIcon: ({ focused }) => (
            <ClockIcon color={focused ? "#e91e63" : "#c6a9b6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
