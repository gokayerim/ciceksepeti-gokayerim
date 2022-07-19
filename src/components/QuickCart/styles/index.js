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

export const StyledTooltip = styled.div`
  position: absolute;
  background: ${({ theme, isFreeCargo }) =>
    isFreeCargo ? theme.colors.green : theme.colors.red};
  width: 300px;
  height: 55px;
  right: 0;
  bottom: -65px;
  border-radius: 8px;
  padding: 0 10px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid
      ${({ theme, isFreeCargo }) =>
        isFreeCargo ? theme.colors.green : theme.colors.red};
    top: -4px;
    right: 45px;
  }
`;

export const StyledTooltipDescription = styled.p`
  font-size: 14px;
  color: white;
  i {
    color: ${({ theme }) => theme.colors.yellow};
    padding-right: 3px;
  }
`;
export const StyledProgressbar = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.dark_red};
  border-radius: 2px;
  &::before {
    content: "";
    position: absolute;
    width: ${({ progress }) => progress}%;
    height: 100%;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
