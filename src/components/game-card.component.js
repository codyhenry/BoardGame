import { InfoCard, Info } from "./info-card.styles";
import { CardImage } from "./card-image.component";
import { Section } from "./section.component";
import { CustomText } from "./text.component";
import { ConditionChip } from "./chip.component";

//TODO: Move to games > components

const basic = (game) => {
  return (
    <InfoCard elevation={5}>
      <CardImage picture={game.photo} />
      <Info>
        <Section>
          <CustomText variant="label">{game.name} </CustomText>
        </Section>
        <Section>
          <CustomText variant="caption">published: {game.year}</CustomText>
        </Section>
      </Info>
    </InfoCard>
  );
};

const selling = (game) => {
  return (
    <InfoCard elevation={5}>
      <CardImage picture={game.photo} />
      <Info>
        <Section>
          <CustomText variant="label">{game.name} </CustomText>
          <Section variant="end">
            <ConditionChip category={game.condition} />
          </Section>
        </Section>
        <Section>
          <CustomText variant="caption">published: {game.year}</CustomText>
          <Section variant="end">
            {game.sold ? (
              <CustomText variant="label">listed: ${game.salePrice}</CustomText>
            ) : (
              <CustomText variant="success">Sold</CustomText>
            )}
          </Section>
        </Section>
      </Info>
    </InfoCard>
  );
};

const crowdfund = (game) => {
  return (
    <InfoCard elevation={5}>
      <CardImage picture={game.photo} />
      <Info>
        <Section>
          <CustomText variant="label">{game.name} </CustomText>
        </Section>
        <Section>
          {game.funded ? (
            <CustomText variant="success">Funding Complete</CustomText>
          ) : (
            <CustomText variant="error">Funding Incomplete</CustomText>
          )}
          <Section variant="end">
            <CustomText variant="label">{game.pledgeEnd}</CustomText>
          </Section>
        </Section>
      </Info>
    </InfoCard>
  );
};

const wishlist = (game) => {
  return (
    <InfoCard elevation={5}>
      <CardImage picture={game.photo} />
      <Info>
        <Section>
          <CustomText variant="label">{game.name} </CustomText>
        </Section>
        <Section>
          <CustomText variant="caption">published: {game.year}</CustomText>
          <Section variant="end">
            <CustomText
              variant={game.oldPrice > game.bestPrice ? "success" : "error"}
            >
              ${game.bestPrice}
            </CustomText>
          </Section>
        </Section>
      </Info>
    </InfoCard>
  );
};

const variants = {
  basic,
  crowdfund,
  selling,
  wishlist,
};

export const GameCard = (type, game) => {
  return variants[type](game);
};
