import React, { useEffect } from "react";

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

  useEffect(() => {
    if (!logged || !jwt || !user) {
      <Navigate to="/login" state={{ from: history.location }} replace />;
    }
    const userD: any = user;
    if (userD.userType !== "Administrador") {
      <Navigate to="/" state={{ from: history.location }} replace />;
    }

  }, [logged, user, jwt])

  return Children;
}

export default PrivatRoute;
