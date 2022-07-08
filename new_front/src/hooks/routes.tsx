import React from "react";
import { Routes, Route } from "react-router-dom";
import Demandas from "../pages/Demandas";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/demandas" element={<Demandas />} />
    </Routes>
  );
}

export default Router;
