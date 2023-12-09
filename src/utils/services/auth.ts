import { getLocalStorage } from "./local-storage";

export const authHeader = () => {
  const user = getLocalStorage<any>("user");

  if (user && user.accessToken) return { Authorization: "Bearer " + user.accessToken };
  else return undefined;
};

export const getCurrentUser = () => {
  const user = getLocalStorage("user");

  if (user) return user;
  else return undefined;
};
