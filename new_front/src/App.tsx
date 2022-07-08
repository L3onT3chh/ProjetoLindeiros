import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Router from "./hooks/routes";
import "./style.css";

function App() {
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
}

export default App;
