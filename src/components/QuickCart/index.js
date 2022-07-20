import { useEffect, useState } from "react";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Button from "../Button";
import {
  QuickCartWrapper,
  StyledCartIcon,
  StyledBadge,
  StyledTooltip,
  StyledTooltipDescription,
  StyledProgressbar,
  StyledBackdrop,
} from "./styles";

const TRESHOLD = 500;
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
    setFreeCargo(grandTotal >= TRESHOLD);
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
        {showTooltip && (
          <StyledTooltip isFreeCargo={isFreeCargo}>
            {!isFreeCargo && (
              <>
                <StyledTooltipDescription>
                  <i className="bi bi-lightning-charge-fill">
                    {(TRESHOLD - grandTotal).toFixed(2)} TL
                  </i>
                  'lik ürün daha ekleyin kargo bedava
                </StyledTooltipDescription>
                <StyledProgressbar
                  progress={((grandTotal / TRESHOLD) * 100).toFixed(2)}
                />
              </>
            )}
            {isFreeCargo && (
              <StyledTooltipDescription>
                <i className="bi bi-hand-thumbs-up-fill"></i>
                Kargonuz Bedava
              </StyledTooltipDescription>
            )}
          </StyledTooltip>
        )}
      </QuickCartWrapper>
    </>
  );
};

export default QuickCart;
