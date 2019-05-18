import React from "react";
import { View, ScrollView } from "react-native";

import {
  Container,
  ArrowBack,
  Header,
  Image,
  Title,
  Description
} from "./styles";

import { connect } from "react-redux";
import { setHero } from "../../store/actions";

function HeroDetail({ hero, close }) {
  if (!hero) return <View />;

  return (
    <Container isVisible fullScreen>
      <>
        <ArrowBack name="arrow-back" size={32} onPress={close} />

        <Header>
          <Image
            resizeMode={"cover"}
            source={{
              uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
            }}
          />
          <Title h1>{hero.name}</Title>
        </Header>

        <ScrollView>
          {hero.description ? (
            <Description>{hero.description}</Description>
          ) : (
            <Description>Descrição não encontrada.</Description>
          )}

          <Title h2>Series</Title>

          {hero.series.items.map(item => (
            <Description key={item.name}>{item.name}</Description>
          ))}

          <Title h2>Histórias</Title>

          {hero.stories.items.map(item => (
            <Description key={item.name}>{item.name}</Description>
          ))}
        </ScrollView>
      </>
    </Container>
  );
}

const mapStateToProps = state => ({
  hero: state.selectedHero
});

const mapDispatchToProps = {
  close: () => setHero(null)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroDetail);
