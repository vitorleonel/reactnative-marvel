import React from "react";
import { ThemeProvider } from "react-native-elements";

import App from "./components/App";

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
