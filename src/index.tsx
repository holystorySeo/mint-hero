import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import {
  Web3Provider
} from "@ethersproject/providers";
import { GlobalStyle } from "./styles/global-style";

const getLibrary = (provider: any) => {
  return new Web3Provider(provider);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyle />
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
