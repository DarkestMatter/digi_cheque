import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Router } from "./router";
import "./index.css";
import { store } from "./store";
import { CreateChequePopup } from "./components/dashboard/CreateChequePopup";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <CreateChequePopup />
    </Provider>
  </React.StrictMode>
);
