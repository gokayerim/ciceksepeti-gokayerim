import React from "react";
import {
  StyledProductImage,
  StyledProductPrice,
  StyledProductTitle,
  StyledProductWrapper,
} from "./styles";
import Button from "../Button";

const Product = ({ thumbnail, title, price, amount }) => {
  return (
    <StyledProductWrapper>
      <StyledProductImage src={thumbnail} />
      <StyledProductTitle>{title}</StyledProductTitle>
      <StyledProductPrice>{price}</StyledProductPrice>
      <Button use="secondary" size="medium" addOn="pill">
        Sepete Ekle
      </Button>
    </StyledProductWrapper>
  );
};

export default Product;
