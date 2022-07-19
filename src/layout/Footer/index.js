import {
  FooterContainer,
  FooterWrapper,
  StyledCopyRight,
  StyledDescription,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <StyledDescription>
          Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
          mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi”
          Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek
          gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz
          Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze
          çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
          beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş
          verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu
          günlerinde onların sevincine ortak olmak için yapmanız gereken sadece
          birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler
          Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood
          ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin
          adresi; ÇiçekSepeti.
        </StyledDescription>
      </FooterContainer>
      <StyledCopyRight>
        Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
      </StyledCopyRight>
    </FooterWrapper>
  );
};

export default Footer;
