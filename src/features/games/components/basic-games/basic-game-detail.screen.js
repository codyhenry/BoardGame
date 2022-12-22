import { ScrollView, Pressable } from "react-native";
import { Divider, TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useState } from "react";

import { CustomText } from "../../../../components/text.component";
import { BasicGameInfoCard } from "./basic-game-card.component";

const Section = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 5px;
`;

export const GameDetailScreen = ({ route }) => {
  const { game } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(game.notes);
  return (
    <>
      <BasicGameInfoCard />
      <ScrollView>
        <Section>
          <CustomText>
            <MaterialIcons name="timer" size={24} color="black" />
            {game.playTime} minutes
          </CustomText>
          <CustomText>
            <MaterialIcons name="groups" size={24} color="black" />
            {game.minPlayers}-{game.maxPlayers}
          </CustomText>
          <Divider />
        </Section>
        <Section>
          <CustomText variant="title">Notes</CustomText>
        </Section>

        {!isEditing ? (
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
      </ScrollView>
    </>
  );
};
