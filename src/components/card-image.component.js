import { ImageBackground } from "react-native";

import { InfoCardCover } from "./info-card.styles";

//TODO: move to games > components
export const CardImage = ({ picture }) => {
  return (
    <ImageBackground
      source={{ uri: picture }}
      resizeMode="cover"
      blurRadius={5}
    >
      <InfoCardCover source={{ uri: picture }} resizeMode="contain" />
    </ImageBackground>
  );
};
