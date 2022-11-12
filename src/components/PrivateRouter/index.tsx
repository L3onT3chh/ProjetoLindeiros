import React from "react";
import {
  selectCurentUser,
  selectCurrentToken,
} from "app/reducers/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { history } from "util/_helped";

function PrivatRoute({ children: Children }: any) {
  const [user, logged] = useSelector(selectCurentUser);
  const jwt = useSelector(selectCurrentToken);

  if (!logged || !jwt || !user) {
    return <Navigate to="/login" state={{ from: history.location }} replace />;
  }
  // if (auth.user?.userType === "Administrador") return Children;

  return Children;
  // return <Navigate to="/painel" state={{ from: history.location }} replace />;
}

export default PrivatRoute;
