import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../../infrastructure/theme/colors";

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddButton = ({ navigator }) => {
  return (
    <Section>
      <SectionEnd>
        <Pressable
          onPress={() => navigator.navigate("CollectionForm")}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        >
          <Ionicons name="add-circle" size={60} color={colors.brand.primary} />
        </Pressable>
      </SectionEnd>
    </Section>
  );
};
