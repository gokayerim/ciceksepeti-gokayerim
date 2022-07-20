import styled from "styled-components";
import titleBg from "../../../assets/images/title-bg.png";

export const StyledTitleWrapper = styled.div`
  background-image: url(${titleBg});
  padding: 1rem;
`;
export const StyledTitle = styled.h1`
  color: white;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${({ theme }) => theme.breakPoints.desktop};
  }

  @media (max-width: ${({ theme }) =>
      theme.breakPoints.desktop}) and (min-width: ${({ theme }) =>
      theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-right: 12px;
    margin-left: 12px;
    width: calc(100% - 24px);
  }
`;
