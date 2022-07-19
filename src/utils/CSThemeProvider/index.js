import theme from "../theme";
import { ThemeProvider } from "styled-components";

const CSThemeProvider = (props) => {
  return <ThemeProvider theme={theme}> {props.children}</ThemeProvider>;
};

export default CSThemeProvider;
