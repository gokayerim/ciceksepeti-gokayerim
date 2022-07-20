import React from "react";
import theme from "../../utils/theme";
import Button from "../Button";
import {
  StyledContainer,
  StyledInfoCard,
  StyledInfoCardDescription,
  StyledInfoCardsWrapper,
  StyledInfoImage,
} from "./styles";
import motor from "../../assets/images/motor.png";
import gift from "../../assets/images/gift.png";
import paper from "../../assets/images/paper.png";

const CARDS = [
  {
    bgColor: theme.colors.light_red,
    description: "75 TL Üzerine Teslimat Ücreti Bizden",
    buttonText: "Detaylı Bilgi",
    img: motor,
  },
  {
    bgColor: theme.colors.light_blue,
    description: "Hediye Kategorisi için Sepette %15 İndirim",
    buttonText: "Hediye Ürünleri",
    img: gift,
  },
  {
    bgColor: theme.colors.light_green,
    description: "Kırtasiye Kategorisi için Sepette %15 İndirim",
    buttonText: "Detaylı Bilgi",
    img: paper,
  },
];

const InfoCards = () => {
  return (
    <StyledContainer>
      <StyledInfoCardsWrapper>
        {CARDS.map((card) => (
          <StyledInfoCard key={card.description} bgColor={card.bgColor}>
            <StyledInfoImage src={card.img} />
            <div>
              <StyledInfoCardDescription>
                {card.description}
              </StyledInfoCardDescription>
              <Button use="secondary" addOn="pill" size="small">
                {card.buttonText}
              </Button>
            </div>
          </StyledInfoCard>
        ))}
      </StyledInfoCardsWrapper>
    </StyledContainer>
  );
};

export default InfoCards;
