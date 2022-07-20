import styled from "styled-components";

export const QuickCartWrapper = styled.div`
  position: relative;
`;
export const StyledCartIcon = styled.i`
  color: ${({ theme }) => theme.colors.white};
  padding-right: 10px;
`;

export const StyledBadge = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -6px;
  right: 3px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 30%;
  z-index: 1;
`;
