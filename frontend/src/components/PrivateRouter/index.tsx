import { IStateData } from "interfaces/components.interface";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { history } from "util/_helped";

/* eslint-disable react/react-in-jsx-scope */
function PrivatRoute({ children: Children }: any) {
  const { auth } = useSelector((state: IStateData) => state.auth);

  if (!auth.logged && localStorage.getItem("token_jwt") === " ") {
    return <Navigate to="/login" state={{ from: history.location }} replace />;
  }
  if (auth.user?.userType === "Administrador") return Children;

  return <Navigate to="/login" state={{ from: history.location }} replace />;
}

export default PrivatRoute;
