import styled from "styled-components";

export const StyledCatalog = styled.section`
  display: flex;
  margin: 2rem auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const StyledNoProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray_01};
`;
