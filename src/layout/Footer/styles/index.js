import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.colors.gray_03};
  align-items: center;
`;
export const FooterContainer = styled.section``;

export const StyledDescription = styled.div`
  margin: 1rem auto;

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
export const StyledCopyRight = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_02};
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;
