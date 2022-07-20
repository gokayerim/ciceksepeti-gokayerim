import styled from "styled-components";

export const StyledContainer = styled.section`
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: scroll;
  }
`;
export const StyledInfoCardsWrapper = styled.div`
  gap: 1rem;
  display: flex;
  margin-bottom: 2rem;
  width: fit-content;
`;

export const StyledInfoCard = styled.article`
  width: 350px;
  display: flex;
  border-radius: 8px;
  padding: 1rem;
  background-color: ${(props) => props.bgColor};
  align-self: center;
`;
export const StyledInfoCardDescription = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray_01};
  font-weight: 100;
`;

export const StyledInfoImage = styled.img`
  width: 130px;
  height: auto;
  margin-right: 1rem;
`;
