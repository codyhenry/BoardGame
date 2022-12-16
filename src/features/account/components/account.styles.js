import styled from "styled-components/native";

import { Button, TextInput, ActivityIndicator } from "react-native-paper";
//TODO: Animations
// import LottieView from "lottie-react-native";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/game-splash.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: ${(props) => props.location};
`;
export const AccountCover = styled.ScrollView`
  background-color: rgba(25, 25, 25, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.spacing.sm};
`;

export const AuthInput = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.text.primary,
  clearButtonMode: "while-editing",
  autoCapitalize: "none",
  right: <TextInput.Icon icon={props.icon} />,
}))`
  width: 300px;
`;

export const AuthInputFunction = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.text.primary,
  clearButtonMode: "while-editing",
  autoCapitalize: "none",
  right: <TextInput.Icon icon={props.icon} onPress={props.function} />,
}))`
  width: 300px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${(props) => props.theme.fontSizes.h4};
  color: ${(props) => props.theme.colors.text.inverse};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.brand.secondary,
})``;

// export const StyledLottieView = styled(LottieView).attrs({
//   key: "animation",
//   autoPlay: true,
//   loop: false,
//   resizeMode: "cover",
//   source: require("../../../../assets/watermelon.json"),
// })`
//   width: 100%;
//   height: 60%;
//   position: absolute;
//   top: 25px;
// `;
