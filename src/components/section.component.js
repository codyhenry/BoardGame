import styled from "styled-components/native";

const defaultSection = () => `
  flex-direction: row;
`;

const center = () => `
  align-items: center;
`;

const end = () => `
  flex: 1;
  justify-content: flex-end;
`;

const checkbox = () => `
justify-content: start;
  align-items: center;
`;

const variants = {
  center,
  checkbox,
  end,
};

export const Section = styled.View`
  ${() => defaultSection}
  ${({ variant }) => variants[variant]}
`;

Section.defaultProps = {
  variant: "center",
};
