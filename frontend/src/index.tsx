import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, ReactReduxContext } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Store } from "./app/store";
import "./pages/css/responsive.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={Store} context={ReactReduxContext}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
