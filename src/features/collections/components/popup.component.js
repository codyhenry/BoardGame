import styled from "styled-components/native";
import { Pressable } from "react-native";

import { CollectionForm } from "./form.component";
import { Spacer } from "../../../components/spacer.component";

//TODO: refactor styling, section, section end come from info card styles
const Section = styled.View`
  flex-direction: row;
  flex-wrap: wrap
  justify-content: center;
`;

const ModalScreen = styled.View`
flex:1
align-items: center;
justify-content:center;
background-color: rgba(0,0,0,0.5);
`;

const BackgroundButton = styled(Pressable)`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const ModalCard = styled.View`
  background-color: white;
  width: 90%;
  border-radius: 5px;
`;

export const Popup = ({ navigation }) => {
  return (
    <ModalScreen>
      <BackgroundButton onPress={() => navigation.goBack()} />
      <ModalCard>
        <Spacer size="sm" />
        <Section>
          <CollectionForm navigator={navigation} />
        </Section>
        <Spacer size="sm" />
      </ModalCard>
    </ModalScreen>
  );
};
