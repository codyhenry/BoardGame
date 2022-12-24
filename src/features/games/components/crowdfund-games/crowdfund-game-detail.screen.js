import { ScrollView, Pressable } from "react-native";
import { TextInput, List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useState } from "react";

import { CustomText } from "../../../../components/text.component";
import { CrowdfundGameInfoCard } from "./crowdfund-game-card.component";
import { Spacer } from "../../../../components/spacer.component";

const Section = styled.View`
  flex-direction: row;
  flex-wrap: wrap
  justify-content: space-evenly;
  padding-top: 5px;
  align-items: center;
`;

const NotesSection = styled.View`
  padding: 8px;
`;

const Divider = styled.View`
  flex: 1;
  background-color: #000;
  height: 2px;
`;

export const CrowdfundGameDetailScreen = ({ game }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(game.notes);
  return (
    <>
      <CrowdfundGameInfoCard game={game} />
      <ScrollView>
        <Spacer size="md" />
        <List.Accordion
          title="Game Information"
          left={(props) => <List.Icon {...props} icon="information" />}
        >
          <List.Item title={game.pledgeLevel} description="(pledge)" />
          <List.Item title={game.pledgeValue} />
        </List.Accordion>
        <Section>
          <CustomText>
            <MaterialIcons name="local-shipping" size={24} color="black" />
            {game.estimatedDelivery}
          </CustomText>
        </Section>
        <List.Item title="link" />
        <Section>
          <Divider />
          <CustomText variant="title">Notes</CustomText>
          <Divider />
        </Section>
        <NotesSection>
          {!isEditing && notes.trim().length !== 0 ? (
            <Pressable onPress={() => setIsEditing(true)}>
              <CustomText>{notes}</CustomText>
            </Pressable>
          ) : (
            <TextInput
              mode="outlined"
              multiline={true}
              value={notes}
              onChangeText={(notes) => setNotes(notes)}
              //save notes to database
              onBlur={() => setIsEditing(false)}
            />
          )}
        </NotesSection>
      </ScrollView>
    </>
  );
};
