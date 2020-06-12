import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import Navigation from "./Navigation";

const AppContainer = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: Constants.statusBarHeight,
    },
  });

  return (
    <View style={{ ...styles.container }}>
      {/* <Expo.AppLoading /> */}
      <View style={{ ...styles.statusBar }} />
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default AppContainer;
