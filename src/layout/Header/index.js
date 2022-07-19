import logo from "../../assets/images/logo.png";
import { StyledHeaderWrapper, StyledLogo } from "./styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo src={logo} />
    </StyledHeaderWrapper>
  );
};

export default Header;
