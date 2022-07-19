import React from "react";
import { StyledButton } from "./styles";

const Button = ({ onClick, children, use, addOn, size, ...rest }) => {
  return (
    <StyledButton
      use={use}
      addOn={addOn}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
