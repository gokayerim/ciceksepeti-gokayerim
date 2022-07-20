import logo from "../../assets/images/logo.png";
import QuickCart from "../../components/QuickCart";
import SearchBar from "../../components/SearchBar";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Title from "../Title";
import { StyledHeaderWrapper, StyledLogo } from "./styles";

const Header = () => {
  const {
    state: { isMobile },
  } = useProductContext();

  return (
    <>
      <StyledHeaderWrapper>
        <StyledLogo src={logo} />
        {!isMobile && <SearchBar />}
        <QuickCart />
      </StyledHeaderWrapper>
      {isMobile && <SearchBar />}
      <Title />
    </>
  );
};

export default Header;
