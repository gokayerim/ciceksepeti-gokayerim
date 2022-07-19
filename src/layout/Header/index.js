import logo from "../../assets/images/logo.png";
import QuickCart from "../../components/QuickCart";
import SearchBar from "../../components/SearchBar";
import { StyledHeaderWrapper, StyledLogo } from "./styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo src={logo} />
      <SearchBar />
      <QuickCart />
    </StyledHeaderWrapper>
  );
};

export default Header;
