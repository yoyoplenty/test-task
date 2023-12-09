import { create } from "zustand";
import { IUser } from "../types/user";
import { getCurrentUser } from "../utils/services/auth";
import { Sector } from "../types/response";

type Store = {
  authUser: IUser | {};
  loading: boolean;
  subSector: Sector[] | null;
  setLoading: (isLoading: boolean) => void;
  setAuthUser: (authUser: IUser | {}) => void;
  setSubSector: (sectors: Sector[]) => void;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  subSector: null,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setAuthUser: (authUser) => set((state) => ({ ...state, authUser })),
  setSubSector: (sectors) => set((state) => ({ ...state, subSector: sectors })),
}));

export default useStore;
