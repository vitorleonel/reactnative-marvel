import React from "react";
import { ThemeProvider } from "react-native-elements";

import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";

export default function Main() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
}
