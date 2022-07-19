import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.colors.gray_03};
  align-items: center;
`;
export const FooterContainer = styled.section`
  width: 60%;
`;

export const StyledDescription = styled.div`
  margin: 1rem auto;
`;
export const StyledCopyRight = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_02};
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;
