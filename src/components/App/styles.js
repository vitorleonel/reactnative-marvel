import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { ListItem } from "react-native-elements";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight(true) + 8}px;
  background-color: #0097e6;
`;

export const Heroes = styled.FlatList``;

export const Hero = styled(ListItem).attrs({
  containerStyle: {
    paddingHorizontal: 24,
    backgroundColor: "#0097e6",
    alignItems: "center"
  },
  titleStyle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold"
  },
  subtitleStyle: {
    color: "#ffffff"
  },
  subtitleProps: {
    numberOfLines: 1
  }
})``;
