import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript></ColorModeScript>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
