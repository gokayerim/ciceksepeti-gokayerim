import React from "react";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Button from "../Button";
import { QuickCartWrapper, StyledCartIcon, StyledBadge } from "./styles";

const QuickCart = () => {
  const {
    state: { cart },
  } = useProductContext();
  return (
    <QuickCartWrapper>
      <Button use="primary" size="large" addOn="pill">
        <StyledCartIcon className="bi bi-cart"></StyledCartIcon>
        Sepetim
      </Button>
      <StyledBadge>
        {cart.reduce((sum, item) => sum + item.amount, 0)}
      </StyledBadge>
    </QuickCartWrapper>
  );
};

export default QuickCart;
