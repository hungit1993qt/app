import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button, PrimaryButton } from "./Demo.styles";

const theme = {
  white: "#fff",
  black: "#333",
  red: "#f00",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: pink;
  }
`;

const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button disabled>Submit</Button>
      <PrimaryButton>Cancel</PrimaryButton>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Demo;
