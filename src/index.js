import React, { useEffect } from "react";
import { View } from "react-native";

import api from "./services/api";

// import { Container } from './styles';

export default function App() {
  useEffect(() => {
    api
      .get("v1/public/characters")
      .then(data => console.log(data))
      .catch(error => console.log(error));
  });

  return <View />;
}
