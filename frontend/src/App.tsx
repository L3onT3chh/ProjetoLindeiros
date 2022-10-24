/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
import React, { useEffect } from "react";
import Router from "./hooks/routes";
import { toast, Toaster } from "react-hot-toast";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";

function App() {
  const { toasts } = useSelector((state: IStateData) => state.toast);

  useEffect(() => {
    if (toasts.type === "success") toast.success(toasts.message);
    else toast.error(toasts.message);
    // }
  }, [toasts.message]);

  return (
    <>
      <Router />;
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
