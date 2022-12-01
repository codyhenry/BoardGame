import {
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
} from "../../../components/info-card.styles";
import { CustomText } from "../../../components/text.component";

export const GameInfoCard = ({ collection = {} }) => {
  const {
    name = "Some Collection",
    photo = "https://en.wikipedia.org/wiki/File:Catan-2015-boxart.jpg#/media/File:Catan-2015-boxart.jpg",
    links = [
      "amazon.com",
      "target.com",
      "miniaturemarket.com",
      "bgg.com",
      "kickstarter.com",
    ],
    year = 2015,
    bestPrice = 100.0,
  } = collection;
  return (
    <InfoCard elevation={5}>
      <InfoCardCover source={{ uri: photo }} />
      <Info>
        <Section>
          <CustomText variant="label">{name} </CustomText>
        </Section>
        <Section>
          <CustomText variant="caption">published: {year} Items</CustomText>
          <SectionEnd>
            <CustomText variant="label">{bestPrice}</CustomText>
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};
