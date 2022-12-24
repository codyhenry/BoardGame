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
export const CrowdfundGameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
    links = ["kickstarter.com"],
    notes = "",
    //TODO: figure out correct date format
    pledgeEnd = "4 days to go",
    estimatedDelivery = new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    funded = false,
    pledgeLevel = "standard",
    pledgeValue = 5,
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
          {funded ? (
            <CustomText variant="success">Funding Complete</CustomText>
          ) : (
            <CustomText variant="error">Funding Incomplete</CustomText>
          )}
          <SectionEnd>
            <CustomText variant="label">{pledgeEnd}</CustomText>
          </SectionEnd>
        </Section>
      </Info>
    </InfoCard>
  );
};

//TODO make an info card for each category of game (wishlist, basic, selling, kickstarter)
