import styled from "styled-components/native";

const sideVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

//translate input values into spacing.js indices
const getVariant = (side, size, theme) => {
  const marginSize = theme.spacing[size];
  return `${sideVariant[side]}:${marginSize}`;
};

//If there is an Android bug, change this to not declare the view and instantiate it at same time
export const Spacer = styled.View`
  ${({ side, size, theme }) => getVariant(side, size, theme)}
`;
Spacer.defaultProps = { side: "top", size: "sm" };
