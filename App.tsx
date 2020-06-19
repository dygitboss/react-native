import React, {FC, useEffect, useState} from "react";
import { Text } from "react-native";
import AppContainer from "./src/AppContainer";
import { Provider } from "react-redux";
import { persist, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { SplashScreen } from "expo";
import * as Font from "expo-font";

type Props = {
  skipLoadingScreen: boolean;
};

const App: FC<Props> = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          "SF Pro Display": require("./src/assets/fonts/SFProDisplay-Regular.ttf"),
          "SF Pro Display Medium": require("./src/assets/fonts/SFProDisplay-Medium.ttf"),
          "SF Pro Display Bold": require("./src/assets/fonts/SFProDisplay-Bold.ttf"),
          "SF Pro Text": require("./src/assets/fonts/SFProText-Regular.ttf"),
          "SF Pro Rounded Bold": require("./src/assets/fonts/SF-Pro-Rounded-Bold.ttf"),
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persist}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
