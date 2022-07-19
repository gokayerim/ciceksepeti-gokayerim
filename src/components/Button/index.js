import React from "react";
import { StyledButton } from "./styles";

const Button = ({ onClick, children, use, addOn, size }) => {
  return (
    <StyledButton use={use} addOn={addOn} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
