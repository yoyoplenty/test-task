import { create } from "zustand";
import { IUser } from "../types/user";
import { Sector } from "../types/response";
import { setLocalStorage } from "../utils/storage";
import { getCurrentParentSector, getCurrentSubSector, getCurrentUser } from "../utils/storage/data";

type Store = {
  authUser: IUser | {};
  loading: boolean;
  parentSector: Sector | any;
  subSector: Sector[] | null;
  setLoading: (isLoading: boolean) => void;
  setAuthUser: (authUser: IUser | {}) => void;
  setParentSector: (sector: Sector) => void;
  setSubSector: (sectors: Sector[]) => void;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  parentSector: getCurrentParentSector(),
  subSector: getCurrentSubSector(),
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
}));

export default useStore;
