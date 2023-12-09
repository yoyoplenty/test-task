import { appStore } from "../../store";
import { Navigate } from "react-router-dom";

const AuthorizeUser = ({ children }: any) => {
  const store = appStore();
  const user = store.authUser;

  if (!user) return <Navigate to={"/login"} replace />;
  return children;
};

export default AuthorizeUser;
