import React, { useEffect, useState } from "react";
import {
  StyledAmountSelector,
  StyledProductImage,
  StyledProductPrice,
  StyledProductTitle,
  StyledProductWrapper,
} from "./styles";
import Button from "../Button";
import { useProductContext } from "../../utils/hooks/useProductContext";

const Product = ({ id, thumbnail, title, price }) => {
  const [amount, setAmount] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = useProductContext();

  useEffect(() => {
    setAmount(cart.find((item) => item.id === id)?.amount);
  }, [cart, id]);

  const handleAddCart = () => {
    dispatch({ type: "SET_CART_ITEM", payload: { id, price } });
  };
  const handleIncrease = () => {
    dispatch({
      type: "SET_CART_ITEM",
      payload: { id, price, amount: amount + 1 },
    });
  };
  const handleDecrease = () => {
    if (amount !== 1) {
      return dispatch({
        type: "SET_CART_ITEM",
        payload: { id, price, amount: amount - 1 },
      });
    }
    return dispatch({
      type: "RESET_CART_ITEM",
      payload: id,
    });
  };
  return (
    <StyledProductWrapper>
      <StyledProductImage src={thumbnail} />
      <StyledProductTitle>{title}</StyledProductTitle>
      <StyledProductPrice>{price} TL</StyledProductPrice>
      {!amount && (
        <Button
          use="secondary"
          size="medium"
          addOn="pill"
          onClick={handleAddCart}
        >
          Sepete Ekle
        </Button>
      )}
      {amount && (
        <StyledAmountSelector>
          <Button addOn="circle" use="secondary" onClick={handleDecrease}>
            -
          </Button>
          {amount}
          <Button addOn="circle" use="secondary" onClick={handleIncrease}>
            +
          </Button>
        </StyledAmountSelector>
      )}
    </StyledProductWrapper>
  );
};

export default Product;
