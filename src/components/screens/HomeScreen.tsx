import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
});

export default HomeScreen;
