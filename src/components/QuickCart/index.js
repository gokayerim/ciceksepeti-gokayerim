import React from "react";
import Button from "../Button";
import { QuickCartWrapper, StyledCartIcon, StyledBadge } from "./styles";

const QuickCart = () => {
  return (
    <QuickCartWrapper>
      <Button use="primary" size="large" addOn="pill">
        <StyledCartIcon className="bi bi-cart"></StyledCartIcon>
        Sepetim
      </Button>
      <StyledBadge>3</StyledBadge>
    </QuickCartWrapper>
  );
};

export default QuickCart;
