import styled from "styled-components";

const Container = styled.main`
  margin-right: auto;
  margin-left: auto;

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

export default Container;
