import { useEffect, useState } from "react";
import { FREE_CARGO_LIMIT } from "../../enums";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Button from "../Button";
import Tooltip from "../Tooltip";
import {
  QuickCartWrapper,
  StyledCartIcon,
  StyledBadge,
  StyledBackdrop,
} from "./styles";

const QuickCart = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFreeCargo, setFreeCargo] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0.0);
  const {
    state: { cart, isMobile },
  } = useProductContext();

  useEffect(() => {
    setGrandTotal(
      cart.reduce((acc, c) => {
        return acc + c.amount * c.price;
      }, 0.0)
    );
  }, [cart]);

  useEffect(() => {
    setFreeCargo(grandTotal >= FREE_CARGO_LIMIT);
  }, [grandTotal]);

  return (
    <>
      {isMobile && showTooltip && (
        <StyledBackdrop
          onClick={() => {
            isMobile && setShowTooltip(false);
          }}
        />
      )}
      <QuickCartWrapper>
        <Button
          use="primary"
          size="large"
          addOn="pill"
          onClick={() => {
            isMobile && setShowTooltip(true);
          }}
          onMouseEnter={() => {
            !isMobile && setShowTooltip(true);
          }}
          onMouseLeave={() => {
            !isMobile && setShowTooltip(false);
          }}
        >
          <StyledCartIcon className="bi bi-cart"></StyledCartIcon>
          Sepetim
        </Button>

        <StyledBadge>
          {cart.reduce((sum, item) => sum + item.amount, 0)}
        </StyledBadge>

        <Tooltip
          show={showTooltip}
          isFreeCargo={isFreeCargo}
          grandTotal={grandTotal}
        />
      </QuickCartWrapper>
    </>
  );
};

export default QuickCart;
