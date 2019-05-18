import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar } from "react-native";

import { Container, Heroes, Hero } from "./styles";
import HeroDetail from "../HeroDetail";

import { connect } from "react-redux";
import { requestHeroes, setHero } from "../../store/actions";

function App({ heroes, hero, getHeroes, selectHero }) {
  useEffect(() => {
    StatusBar.setBarStyle(hero ? "dark-content" : "light-content");
  }, [hero]);

  useEffect(() => {
    getHeroes();
  }, []);

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
        onPress={() => selectHero(item)}
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

      <HeroDetail />
    </Container>
  );
}

const mapStateToProps = state => ({
  heroes: state.heroes,
  hero: state.selectedHero
});

const mapDispatchToProps = {
  getHeroes: (offset = 0) => requestHeroes(offset),
  selectHero: hero => setHero(hero)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
