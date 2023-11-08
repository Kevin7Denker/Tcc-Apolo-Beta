import React from "react";
import TabNavigation from "./src/Routes/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./src/Api/Spotify/redux/index";
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
      <Provider store={store}>
        <TabNavigation/>
      </Provider>
  );
}
