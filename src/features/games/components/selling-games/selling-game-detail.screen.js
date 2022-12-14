import { ScrollView, Pressable, Linking } from "react-native";
import Checkbox from "expo-checkbox";
import { TextInput, List } from "react-native-paper";
import styled from "styled-components/native";
import { useState } from "react";

import { CustomText } from "../../../../components/text.component";
import { SellingGameInfoCard } from "./selling-game-card.component";
import { Spacer } from "../../../../components/spacer.component";

const Section = styled.View`
  flex-direction: row;
  flex-wrap: wrap
  justify-content: start;
  align-items: center;
  padding: 10px;
`;

const NotesSection = styled.View`
  padding: 8px;
`;

const Divider = styled.View`
  flex: 1;
  background-color: #000;
  height: 2px;
`;

const LinksContainer = styled.View`
  padding-left: 10px;
`;

//TODO: sold status checkbox. Disable after click create date on sell click
export const SellingGameDetailScreen = ({ game }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(game.notes);
  const [isSold, setIsSold] = useState(game.sold);
  return (
    <>
      <SellingGameInfoCard game={game} />
      <ScrollView>
        <Spacer size="md" />
        <List.Accordion
          title="Game Information"
          left={(props) => <List.Icon {...props} icon="information" />}
        >
          <List.Item
            title={`Best Price: $${game.bestPrice}`}
            description={`(found at: ${game.links[0].site})`}
          />
          {isSold && (
            <List.Item title={game.soldDate} description="(sell date)" />
          )}
        </List.Accordion>
        <Section>
          <CustomText>Game Sold:</CustomText>
          <Spacer side="left" size="sm" />
          <Checkbox
            disabled={false}
            value={isSold}
            onValueChange={(newValue) => setIsSold(newValue)}
            color={isSold ? "#4630EB" : undefined}
            style={{ paddingLeft: 0, width: 20 }}
          />
        </Section>
        <LinksContainer>
          <CustomText vairant="label">Go to website:</CustomText>
          {game.links.map((link) => {
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
        </LinksContainer>
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
