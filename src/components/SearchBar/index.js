import { useProductContext } from "../../utils/hooks/useProductContext";
import Button from "../Button";
import { StyledInput, StyledInputWrapper } from "./styles";

let timeout = null;

const SearchBar = () => {
  const { dispatch } = useProductContext();

  const handleSearchTermChange = (e) => {
    if (e.target.value.length > 2) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
      }, 300);
    } else {
      dispatch({ type: "RESET_SEARCH_TERM" });
    }
  };
  return (
    <StyledInputWrapper>
      <span className="bi bi-search"></span>
      <StyledInput placeholder="Ürün Ara" onChange={handleSearchTermChange} />
      <Button addOn="pill" use="green" size="medium">
        Ara
      </Button>
    </StyledInputWrapper>
  );
};

export default SearchBar;
