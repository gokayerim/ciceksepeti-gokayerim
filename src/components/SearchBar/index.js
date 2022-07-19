import React from "react";
import Button from "../Button";
import { StyledInput, StyledInputWrapper } from "./styles";

const SearchBar = () => {
  return (
    <StyledInputWrapper>
      <span className="bi bi-search"></span>
      <StyledInput />
      <Button addOn="pill" use="green" size="medium">
        Ara
      </Button>
    </StyledInputWrapper>
  );
};

export default SearchBar;
