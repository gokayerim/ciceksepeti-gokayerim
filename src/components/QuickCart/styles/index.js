import styled from "styled-components";

export const QuickCartWrapper = styled.div`
  position: relative;
`;
export const StyledCartIcon = styled.i`
  color: ${({ theme }) => theme.colors.white};
  padding-right: 10px;
`;

export const StyledBadge = styled.span`
  position: absoulute;
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
