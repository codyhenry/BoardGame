import { ImageBackground } from "react-native";
import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../../components/info-card.styles";
import { CustomText } from "../../../../components/text.component";

export const SellingGameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    links = ["amazon.com"],
    year = 2015,
    bestPrice = 100.0,
    notes = [],
    condition = "",
    sold = true,
    soldDate = new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    //SELLING: Condition (chips: red=damaged, orange=worn, yellow=like new, green=new in shrink), number of duplicate games to sell
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
