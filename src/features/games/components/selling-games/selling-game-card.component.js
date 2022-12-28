import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../../components/info-card.styles";
import { CustomText } from "../../../../components/text.component";
import { ConditionChip } from "../../../../components/chip.component";

export const SellingGameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    links = ["amazon.com"],
    year = 2015,
    bestPrice = 100.0,
    salePrice = 125.0,
    notes = [],
    condition = "used",
    sold = true,
    soldDate = new Date().toLocaleDateString("en-US"),
    //SELLING: Condition (chips: red=damaged, orange=worn, yellow=like new, green=new in shrink), number of duplicate games to sell
  } = game;
  //TODO: If sold, make image gray
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
          <SectionEnd>
            <ConditionChip category={condition} />
          </SectionEnd>
        </Section>
        <Section>
          <CustomText variant="caption">published: {year}</CustomText>
          <SectionEnd>
            {sold ? (
              <CustomText variant="label">listed: ${salePrice}</CustomText>
            ) : (
              <CustomText variant="success">Sold</CustomText>
            )}
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};
