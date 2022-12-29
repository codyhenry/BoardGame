import { useState } from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { CustomText } from "./text.component";

const NotesContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

const Divider = styled.View`
  flex: 1;
  background-color: black;
  height: 2px;
`;

const Section = styled.View`
  flex-direction: row;
  flex-wrap: wrap
  justify-content: space-evenly;
  padding-top: ${(props) => props.theme.spacing.xs};
  align-items: center;
`;

//TODO: Make this its own screen and move to games > screens

export const Notes = ({ gameNotes }) => {
  const [notes, setNotes] = useState(gameNotes);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <Section>
        <Divider />
        <CustomText variant="title">Notes</CustomText>
        <Divider />
      </Section>
      <NotesContainer>
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
            //TODO: save notes to database
            onBlur={() => setIsEditing(false)}
          />
        )}
      </NotesContainer>
    </>
  );
};
