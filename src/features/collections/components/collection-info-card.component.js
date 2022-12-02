import {
  InfoCard,
  Info,
  Section,
  SectionEnd,
} from "../../../components/info-card.styles";
import { CustomText } from "../../../components/text.component";
import { CustomChip } from "../../../components/chip.component";

export const CollectionInfoCard = ({ collection = {} }) => {
  const {
    name = "Some Collection",
    collectionTag = "wishlist",
    numGames = 60,
  } = collection;
  return (
    <InfoCard elevation={5} mode="outlined">
      <Info>
        <Section>
          <CustomText variant="label">{name} </CustomText>
        </Section>
        <Section>
          <CustomText variant="caption">{numGames} Items</CustomText>
          <SectionEnd>
            <CustomChip category={collectionTag} />
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};
