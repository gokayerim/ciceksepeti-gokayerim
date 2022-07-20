import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_02};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray_03};
  height: 50px;
  width: 100%;
  margin: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 12px;
    width: auto;
  }
`;
export const StyledInput = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray_01};
  height: 100%;
  width: 100%;
  padding: 0 1rem;

  outline: none;
  &:focus-visible {
    outline: none;
  }
`;
