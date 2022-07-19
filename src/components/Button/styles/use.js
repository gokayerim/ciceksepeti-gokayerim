import { css } from "styled-components";

export const primary = css`
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.light_blue};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.light_blue};
  }
`;

export const secondary = css`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.blue};
  border-color: ${(props) => props.theme.colors.blue};

  &:hover {
    border-color: ${(props) => props.theme.colors.light_blue};
  }
  &:active {
    border-color: ${(props) => props.theme.colors.light_blue};
  }
`;

export const gray = css`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray_01};
  border: 1px solid ${(props) => props.theme.colors.gray_02};
  &:hover {
    color: ${(props) => props.theme.colors.gray_02};
  }
  &:active {
    color: ${(props) => props.theme.colors.gray_02};
  }
`;

export const green = css`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.light_green};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.light_green};
  }
`;
