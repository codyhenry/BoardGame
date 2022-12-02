import { ImageBackground } from "react-native";
import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../components/info-card.styles";
import { CustomText } from "../../../components/text.component";

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
  } = game;
  return (
    <InfoCard elevation={5}>
      <ImageBackground source={{ uri: photo }} resizeMode="cover">
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
