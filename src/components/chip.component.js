import styled from "styled-components/native";
import { Chip } from "react-native-paper";

const chipColor = {
  owned: "#f3722c",
  custom: "#6c757d",
  wishlist: "#ef476f",
  selling: "#084B83",
  crowdfund: "#43aa8b",
};

export const CollectionChip = styled(Chip).attrs((props) => {
  return { selectedColor: "white", children: props.category };
})`
  background-color: ${(props) => chipColor[props.category]};
`;
CollectionChip.defaultProps = { category: "owned" };

export const SelectChip = styled(Chip).attrs((props) => {
  return {
    selectedColor: props.selected == true ? "white" : "black",
    mode: props.selected ? "flat" : "outlined",
    children: props.category,
  };
})`
  background-color: ${(props) =>
    props.selected == true ? chipColor[props.category] : "white"};
  width: 45%;
  height: 32px;
`;
