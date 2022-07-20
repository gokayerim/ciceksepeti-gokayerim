import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  height: 4rem;
  display: flex;
  margin: 1rem auto;
  justify-content: space-between;
  align-items: center;

  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    width: 1200px;
  }

  @media (max-width: 1200px) and (min-width: 768px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledLogo = styled.img`
  width: 12rem;
  height: min-content;
`;
