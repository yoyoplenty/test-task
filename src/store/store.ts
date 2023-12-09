import { create } from "zustand";
import { IUser } from "../types/user";
import { getCurrentUser } from "../utils/services/auth";

type Store = {
  authUser: IUser | {};
  loading: boolean;
  setLoading: (isLoading: boolean) => any;
  setAuthUser: (authUser: IUser | {}) => any;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setAuthUser: (authUser) => set((state) => ({ ...state, authUser })),
}));

export default useStore;
