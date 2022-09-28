import { IStateData } from "interfaces/components.interface";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { history } from "util/_helped";

/* eslint-disable react/react-in-jsx-scope */
function PrivatRoute({ children: Children }: any) {
  const { auth } = useSelector((state: IStateData) => state);

  if (
    !auth.auth.jwt.toString() &&
    auth.auth.user?.user_type !== "Administrador"
  ) {
    return <Navigate to="/login" state={{ from: history.location }} replace />;
  }

  return Children;
}

export default PrivatRoute;
