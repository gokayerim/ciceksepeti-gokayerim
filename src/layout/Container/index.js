import styled from "styled-components";

const Container = styled.main`
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

export default Container;
