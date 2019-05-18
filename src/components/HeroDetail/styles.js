import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Avatar, Text, Overlay, Icon } from "react-native-elements";

export const Container = styled(Overlay).attrs({
  overlayStyle: {
    paddingTop: getStatusBarHeight(true) + 8,
    paddingHorizontal: 24
  }
})`
  justify-content: flex-start;
`;

export const ArrowBack = styled(Icon).attrs({
  iconStyle: {
    marginRight: "auto",
    marginBottom: 16
  }
})``;

export const Header = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const Image = styled(Avatar)`
  width: 100%;
  height: 192px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
  h1Style: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16
  },
  h2Style: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16
  }
})``;

export const Description = styled(Text)`
  font-size: 16px;
  margin-bottom: 6px;
`;
