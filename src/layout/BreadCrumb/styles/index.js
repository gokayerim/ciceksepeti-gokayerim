import styled from "styled-components";

export const StyledBreadCrumbWrapper = styled.div`
  width: 60%;
  margin: 0.25rem auto;
  font-size: 12px;
`;
export const StyledCrumb = styled.i`
  color: ${({ theme }) => theme.colors.gray_01};
`;
export const StyledFinalCrumb = styled.i`
  color: ${({ theme }) => theme.colors.green};
`;
