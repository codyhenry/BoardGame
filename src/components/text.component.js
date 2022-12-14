import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.body};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
font-family: ${theme.fonts.body};
`;

const title = (theme) => `
  font-family: ${theme.fonts.headingBold};
  font-size: ${theme.fontSizes.h5};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const success = (theme) => `
  color: ${theme.colors.text.success};
`;

const caption = (theme) => `
font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.caption};
`;

const label = (theme) => `
  font-family: ${theme.fonts.headingMedium};
`;

const link = (theme) => `
color: ${theme.colors.text.link}; 
`;

const variants = {
  body,
  label,
  caption,
  error,
  success,
  title,
  link,
};

export const CustomText = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

CustomText.defaultProps = {
  variant: "body",
};
