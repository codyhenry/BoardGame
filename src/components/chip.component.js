import styled from "styled-components/native";
import { Chip } from "react-native-paper";

const chipColor = {
  basic: "#f3722c",
  wishlist: "#ef476f",
  selling: "#084B83",
  crowdfund: "#43aa8b",
};

const conditionColor = {
  unopened: "#8cb369",
  "like new": "#048ba8",
  used: "#FFAE03",
  worn: " #f18f01",
  damaged: "#C5283D",
};

export const CollectionChip = styled(Chip).attrs((props) => {
  return { selectedColor: "white", children: props.category };
})`
  background-color: ${(props) => chipColor[props.category]};
`;
CollectionChip.defaultProps = { category: "basic" };

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

export const ConditionChip = styled(Chip).attrs((props) => {
  return { selectedColor: "white", children: props.category };
})`
  background-color: ${(props) => conditionColor[props.category]};
`;
CollectionChip.defaultProps = { category: "unopened" };

//TODO: add tooltips
//unopened = new in shrink
//like new = out of shrink but no wear or punch outs
//used = played or punched out components
//worn = bent cards/components, shelf wear, ding and dent
//damaged = missing/broken pieces
