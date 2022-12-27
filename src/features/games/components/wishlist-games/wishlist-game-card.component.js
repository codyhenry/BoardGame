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
export const WishlistGameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    links = [
      { site: "amazon", url: "amazon.com" },
      { site: "target", url: "target.com" },
      { site: "miniature market", url: "miniaturemarket.com" },
      { site: "board game geek", url: "bgg.com" },
    ],
    //link object for custom links to game on different websites
    year = 2015,
    oldPrice = 120.0,
    bestPrice = 100.0,
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
          <SectionEnd>
            <CustomText variant={oldPrice > bestPrice ? "success" : "error"}>
              ${bestPrice}
            </CustomText>
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};
