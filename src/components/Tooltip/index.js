import { FREE_CARGO_LIMIT } from "../../enums";
import {
  StyledProgressbar,
  StyledTooltip,
  StyledTooltipDescription,
} from "./styles";

const Tooltip = ({ show, isFreeCargo, grandTotal }) => {
  if (!show) return null;
  return (
    <>
      <StyledTooltip isFreeCargo={isFreeCargo}>
        {!isFreeCargo && (
          <>
            <StyledTooltipDescription>
              <i className="bi bi-lightning-charge-fill">
                {(FREE_CARGO_LIMIT - grandTotal).toFixed(2)} TL
              </i>
              'lik ürün daha ekleyin kargo bedava
            </StyledTooltipDescription>
            <StyledProgressbar
              progress={((grandTotal / FREE_CARGO_LIMIT) * 100).toFixed(2)}
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
    </>
  );
};

export default Tooltip;
