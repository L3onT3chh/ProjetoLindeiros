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
  const userD: any = user;
  if (userD.userType !== "Administrador") {
    return <Navigate to="/" state={{ from: history.location }} replace />;
    // return <Navigate to="/" state={{ from: history.location }} replace />;
  }
  return Children;
}

export default PrivatRoute;
