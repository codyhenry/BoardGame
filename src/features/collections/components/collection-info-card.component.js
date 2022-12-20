import {
  InfoCard,
  Info,
  Section,
  SectionEnd,
} from "../../../components/info-card.styles";
import { CustomText } from "../../../components/text.component";
import { CollectionChip } from "../../../components/chip.component";

export const CollectionInfoCard = ({ collection = {} }) => {
  const {
    name = "Some Collection",
    type = "wishlist",
    numGames = 60,
    id,
    //totalPledgeValue,
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
            <CollectionChip category={type} />
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};
