import { ScrollView, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useState } from "react";

import { CustomText } from "../../../../components/text.component";
import { BasicGameInfoCard } from "./basic-game-card.component";
import { Spacer } from "../../../../components/spacer.component";

const Section = styled.View`
  flex-direction: row;
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
//TODO: fix styling make notes its own screen
export const BasicGameDetailScreen = ({ game }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(game.notes);
  return (
    <>
      <BasicGameInfoCard game={game} />
      <ScrollView>
        <Spacer size="md" />
        <Section>
          <CustomText>
            <MaterialIcons name="timer" size={24} color="black" />
            {game.playTime} minutes
          </CustomText>
          <CustomText>
            <MaterialIcons name="groups" size={24} color="black" />
            {game.minPlayers}-{game.maxPlayers} players
          </CustomText>
        </Section>
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
