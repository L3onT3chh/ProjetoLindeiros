import React, { useEffect } from "react";

import {
  selectCurentUser,
  selectCurrentToken,
} from "app/reducers/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { history } from "util/_helped";

function PrivatRoute({ children: Children }: any) {
  const [user, logged] = useSelector(selectCurentUser);
  const jwt = useSelector(selectCurrentToken);
  const nav = useNavigate();

  useEffect(() => {
    if (!logged || !jwt || !user) {
      nav("/login", { replace: true });
      return;
    }

  }, [logged, user, jwt])

  if(logged && jwt){
    return Children;
  }
}

export default PrivatRoute;
