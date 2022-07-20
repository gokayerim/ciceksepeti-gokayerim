import styled from "styled-components";

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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    position: fixed;
    bottom: 0;
    width: auto;
    left: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 2;
    padding-bottom: 8px;
    &::before {
      content: unset;
    }
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
