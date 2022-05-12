import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const initialState = {
  PostManReducer: [
    {
      id: "1",
      title: "Content 1",
      text: "http://localhost:3000/get1?param1=a&param2=b",
      method: "get",
      apiTitle: "get-product1",
      apiBody: [{}],
      headers: [
        {
          key: "contentType",
          value: "file/pdf",
          isDisable: true,
        },
      ],
      apicalls: [
        {
          id: "1a",
          title: "Test 1 A",
          text: "http://localhost:3000/get1a",
          method: "get",
          apiTitle: "",
          apiBody: [{}],
          headers: [
            {
              key: "contentType",
              value: "application/json",
              isDisable: true,
            },
          ],
        },
        {
          id: "1b",
          title: "Test 1 B",
          text: "http://localhost:3000/get1b",
          method: "get",
          apiTitle: "get-product2b",
          apiBody: [{}],
          headers: [
            {
              key: "contentType",
              value: "file/img",
              isDisable: true,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Content 2",
      apicalls: [
        {
          id: "2b",
          title: "Test 1 B",
          text: "http://localhost:3000/get2",
          method: "get",
          apiTitle: "",
          apiBody: [{}],
          headers: [
            {
              key: "contentType",
              value: "file/mp3",
              isDisable: true,
            },
          ],
          apicalls: [
            {
              id: "2b",
              title: "Test 1 A B",
              text: "http://localhost:3000/get2a",
              method: "get",
              apiTitle: "",
              apiBody: [{}],
              headers: [
                {
                  key: "contentType",
                  value: "file/video",
                  isDisable: true,
                },
              ],
            },
          ],
        },
        {
          id: "2c",
          title: "Test 1 B",
          text: "http://localhost:3000/get2b",
          method: "get",
          apiTitle: "",
          apiBody: [{}],
          headers: [
            {
              key: "contentType",
              value: "file/png",
              isDisable: true,
            },
          ],
        },
      ],
    },
  ],
};

const Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={Store}>
    <ChakraProvider>
      <ColorModeScript></ColorModeScript>
      <App />
    </ChakraProvider>
  </Provider>,
  document.querySelector("#root")
);
