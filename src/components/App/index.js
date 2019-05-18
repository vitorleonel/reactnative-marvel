import React, { useState, useEffect } from "react";
import { ActivityIndicator, StatusBar } from "react-native";

import { Container, Heroes, Hero } from "./styles";
import api from "../../services/api";

import HeroDetail from "../HeroDetail";

export default function App() {
  const [heroes, setHeroes] = useState([]);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    StatusBar.setBarStyle(hero ? "dark-content" : "light-content");
  }, [hero]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  async function fetchHeroes() {
    try {
      const {
        data: { data }
      } = await api.get("/v1/public/characters");

      setHeroes(data.results);
    } catch (error) {}
  }

  function renderHero({ item }) {
    return (
      <Hero
        leftAvatar={{
          size: "medium",
          source: { uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }
        }}
        title={item.name}
        subtitle={
          item.description ? item.description : "Descrição não encontrada."
        }
        onPress={() => setHero(item)}
      />
    );
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      {heroes.length ? (
        <Heroes
          keyExtractor={(_, index) => index.toString()}
          data={heroes}
          renderItem={renderHero}
        />
      ) : (
        <ActivityIndicator color="#ffffff" size="large" />
      )}

      <HeroDetail hero={hero} />
    </Container>
  );
}
