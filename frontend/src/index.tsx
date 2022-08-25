import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Store } from "./app/store";

localStorage.setItem(
  "token",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWY3YzU4OTgtZjc1My00MmY0LThkNjEtNDQ3M2RlNTg1MWQ0In0.K8_Lxv7ddi3IxREVJ4eTcJwkLVAbW96kHW04rkx3w78",
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
