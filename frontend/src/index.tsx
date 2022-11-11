import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, ReactReduxContext } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingDefault } from "components/Loading";
import { persistor, Store } from "./app/store";
import "./pages/css/responsive.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={Store} context={ReactReduxContext}>
    <ToastContainer />
    <PersistGate loading={<LoadingDefault />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
