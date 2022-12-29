import { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import Checkbox from "expo-checkbox";

import { CustomText } from "./text.component";
import { GameCard } from "./game-card.component";
import { Links } from "./card-links.component";
import { Section } from "./section.component";
import { Spacer } from "./spacer.component";
//TODO: Make a notes screen so it is easier to see notes over keyboard
import { Notes } from "./card-notes.component";

//TODO: Move to games > screens

const basic = (game) => {
  return (
    <>
      {GameCard("basic", game)}
      <ScrollView>
        <Spacer size="md" />
        <List.Accordion
          title="Game Information"
          left={(props) => <List.Icon {...props} icon="information" />}
        >
          <List.Item
            title={`${game.playTime} minutes`}
            description="(game length)"
          />
          <List.Item
            title={`${game.minPlayers}-${game.maxPlayers} players`}
            description="(player count)"
          />
        </List.Accordion>
        <Notes gameNotes={game.notes} />
      </ScrollView>
    </>
  );
};

const crowdfund = (game) => {
  return (
    <>
      {GameCard("crowdfund", game)}
      <ScrollView>
        <Spacer size="md" />
        <List.Accordion
          title="Game Information"
          left={(props) => <List.Icon {...props} icon="information" />}
        >
          <List.Item title={game.pledgeLevel} description="(pledge)" />
          <List.Item
            title={`$${game.pledgeValue}`}
            description="(pledgeAmount)"
          />
          <List.Item
            title={game.estimatedDelivery}
            description="(estimated delivery)"
          />
        </List.Accordion>
        <Links gameLinks={game.links} />
        <Notes gameNotes={game.notes} />
      </ScrollView>
    </>
  );
};

//TODO: Make checkbox a styled component
const selling = (game) => {
  const [isSold, setIsSold] = useState(game.sold);
  return (
    <>
      {GameCard("selling", game)}
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
        <Spacer side="top" size="sm" />
        <Section variant="checkbox">
          <Spacer side="left" size="sm" />
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
        <Links gameLinks={game.links} />
        <Notes gameNotes={game.notes} />
      </ScrollView>
    </>
  );
};

const wishlist = (game) => {
  return (
    <>
      {GameCard("wishlist", game)}
      <ScrollView>
        <Spacer size="md" />
        <List.Accordion
          title="Game Information"
          left={(props) => <List.Icon {...props} icon="information" />}
        >
          <List.Item
            title={`${game.minPlayers}-${game.maxPlayers}`}
            description="(players)"
          />
          <List.Item
            title={`${game.playTime} minutes`}
            description="(estimated game length)"
          />
        </List.Accordion>

        <Links gameLinks={game.links} />
        <Notes gameNotes={game.notes} />
      </ScrollView>
    </>
  );
};

const variants = {
  basic,
  crowdfund,
  selling,
  wishlist,
};

export const GameDetail = ({ route }) => {
  const { category, game } = route.params;

  return variants[category](game);
};
