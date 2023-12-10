import { getLocalStorage } from ".";

export const getAuthHeader = () => {
  const user = getLocalStorage<any>("user");

  if (user && user.accessToken) return { Authorization: "Bearer " + user.accessToken };
  else return undefined;
};

export const getCurrentUser = () => {
  const user = getLocalStorage("user");

  if (user) return user;
  else return undefined;
};

export const getCurrentParentSector = () => {
  const parentSector = getLocalStorage("parentSector");

  if (parentSector) return parentSector;
  else return null;
};

export const getCurrentSubSector = () => {
  const subSector = getLocalStorage("subSector");

  if (subSector) return subSector;
  else return undefined;
};

export const getCurrentChildSubSector = () => {
  const childSubSector = getLocalStorage("childSubSector");

  if (childSubSector) return childSubSector;
  else return undefined;
};
