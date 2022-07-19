import styled from "styled-components";

export const StyledBreadCrumbWrapper = styled.div`
  width: 60%;
  margin: 0.25rem auto;
  font-size: 12px;
`;
export const StyledCrumb = styled.a`
  color: ${({ theme }) => theme.colors.gray_01};
`;
export const StyledFinalCrumb = styled.a`
  color: ${({ theme }) => theme.colors.green};
`;
