import { ImageBackground } from "react-native";
import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../../components/info-card.styles";
import { CustomText } from "../../../../components/text.component";

//TODO: create an info card for each collectionType
export const BasicGameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    year = 2015,
    playTime = 30,
    minPlayers = 1,
    maxPlayers = 3,
    notes = "",
  } = game;
  return (
    <InfoCard elevation={5}>
      <ImageBackground
        source={{ uri: photo }}
        resizeMode="cover"
        blurRadius={5}
      >
        <InfoCardCover source={{ uri: photo }} resizeMode="contain" />
      </ImageBackground>
      <Info>
        <Section>
          <CustomText variant="label">{name} </CustomText>
        </Section>
        <Section>
          <CustomText variant="caption">published: {year}</CustomText>
        </Section>
      </Info>
    </InfoCard>
  );
};

//TODO make an info card for each category of game (wishlist, basic, selling, kickstarter)
