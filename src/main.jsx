import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        fontFamily: "PT Sans",
        fontWeight: "bold",
        fontSize: ".8em",
        background: props.colorMode === "light" ? "#F3F3F3" : "#09192E",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
