import toast from "react-hot-toast";
import { appStore } from "../../store";
import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }: any) => {
  const store = appStore();
  const user = store.authUser;

  if (!user) return <Navigate to={"/"} replace />;
  return children;
};

export const authorizeUserRole = () => {
  const store = appStore();
  const user = store.authUser;

  if (user.role !== "admin") {
    toast.error("Unauthorized");
    return false;
  }

  return true;
};
