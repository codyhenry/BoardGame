import { InfoCard, Info } from "../../../components/info-card.styles";
import { Section } from "../../../components/section.component";
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
          <Section variant="end">
            <CollectionChip category={type} />
          </Section>
        </Section>
      </Info>
    </InfoCard>
  );
};
