import { create } from "zustand";
import { IUser, IUserSector } from "../utils/types";
import { Sector } from "../utils/types/response";
import { setLocalStorage } from "../utils/storage";
import { getCurrentParentSector, getCurrentUser, getCurrentSubSector } from "../utils/storage/data";

type Store = {
  authUser: IUser | any;
  loading: boolean;
  parentSector: Sector | any;
  subSector: Sector | any;
  userSector: IUserSector | any;
  setLoading: (isLoading: boolean) => void;
  setAuthUser: (authUser: IUser | {}) => void;
  setParentSector: (sector: Sector) => void;
  setSubSector: (subSector: Sector) => void;
  setUserSector: (userSector: IUserSector) => void;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  parentSector: getCurrentParentSector(),
  subSector: getCurrentSubSector(),
  userSector: {},
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setAuthUser: (authUser) => set((state) => ({ ...state, authUser })),
  setParentSector: (parentSector) => {
    set({ parentSector });
    setLocalStorage("parentSector", parentSector);
  },
  setSubSector: (subSector) => {
    set({ subSector });
    setLocalStorage("subSector", subSector);
  },
  setUserSector: (userSector) => set({ userSector }),
}));

export default useStore;
