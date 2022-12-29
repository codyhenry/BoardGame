import { Linking } from "react-native";
import styled from "styled-components/native";

import { CustomText } from "./text.component";

const Container = styled.View`
  padding-left: ${(props) => props.theme.spacing.sm};
`;

//TODO: move to games > components

export const Links = ({ gameLinks }) => {
  return (
    <Container>
      <CustomText vairant="label">Go to website:</CustomText>
      {gameLinks.map((link) => {
        return (
          <CustomText
            variant="link"
            onPress={() => Linking.openURL(link.url)}
            key={link.url}
          >
            {link.site}
          </CustomText>
        );
      })}
    </Container>
  );
};
