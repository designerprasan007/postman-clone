import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript></ColorModeScript>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
