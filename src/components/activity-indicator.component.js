import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const LoadingComponent = styled(ActivityIndicator).attrs(({ theme }) => {
  const size = theme.spacing.xxl;
  return {
    size: Number(size.slice(0, size.length - 2)),
    color: theme.colors.brand.primary,
  };
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
