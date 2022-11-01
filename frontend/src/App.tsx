/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
import React from "react";
import Router from "./hooks/routes";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
