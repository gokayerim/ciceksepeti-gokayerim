import { css } from "styled-components";

export const primary = css`
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

export const secondary = css`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.blue};
`;

export const gray = css`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray_01};
  border: 1px solid ${(props) => props.theme.colors.gray_02};
`;

export const green = css`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: none;
`;
