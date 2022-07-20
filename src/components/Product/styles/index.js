import styled from "styled-components";

export const StyledProductWrapper = styled.article`
  display: flex;
  width: 150px;
  flex-flow: column;
  border: 1px solid ${({ theme }) => theme.colors.gray_02};
  padding: 20px 10px;
  border-radius: 8px;
  justify-content: space-between;
`;
export const StyledProductImage = styled.img`
  border-radius: 8px;
`;
export const StyledProductTitle = styled.div`
  padding: 10px;
`;
export const StyledProductPrice = styled.div`
  font-weight: 800;
  padding: 10px;
`;

export const StyledAmountSelector = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray_02};
  border-radius: 30px;
  padding: 0.5rem;
  button {
    font-size: 18px;
  }
`;
