import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import { Router } from "./Router";
import ContextProvider from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ContextProvider>
  </React.StrictMode>
);