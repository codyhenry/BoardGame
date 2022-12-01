import styled from "styled-components/native";
import { Chip } from "react-native-paper";

const chipColor = {
  owned: "#f3722c",
  custom: "#6c757d",
  wishlist: "#ef476f",
  selling: "#073b4c",
  crowdfund: "#43aa8b",
};

export const CustomChip = styled(Chip).attrs((props) => {
  return { selectedColor: "white", children: props.category };
})`
  background-color: ${(props) => chipColor[props.category]};
`;
CustomChip.defaultProps = { category: "owned" };
