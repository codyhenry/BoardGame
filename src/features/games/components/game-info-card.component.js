import { ImageBackground } from "react-native";
import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../components/info-card.styles";
import { CustomText } from "../../../components/text.component";

//TODO: figure out if I need to make multiple components for different categories
export const GameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    links = [
      "amazon.com",
      "target.com",
      "miniaturemarket.com",
      "bgg.com",
      "kickstarter.com",
    ],
    year = 2015,
    bestPrice = 100.0,
    playTime = 30,
    minPlayers = 1,
    maxPlayers = 3,
    // pledgeEndDate = new Date().toLocaleDateString("en-GB", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }),
    // estimatedDelivery = new Date().toLocaleDateString("en-GB", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }),
    //funded = false,
    // sold = true,
    // soldDate = new Date().toLocaleDateString("en-GB", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }),
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
          <SectionEnd>
            <CustomText variant="label">${bestPrice}</CustomText>
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};

//TODO make an info card for each category of game (wishlist, owned, custom, selling, kickstarter)
