import { CustomText } from "./text.component";
import styled from "styled-components/native";

const ErrorView = styled.View`
  flex 1;
  justify-content: center;
  align-items: center;
  height: 50%
`;

export const ErrorScreen = ({ errorMessage }) => {
  return (
    <ErrorView>
      <CustomText variant="error">{errorMessage}</CustomText>
    </ErrorView>
  );
};
