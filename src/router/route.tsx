import { createBrowserRouter } from "react-router-dom";
import {
  CreateChildSubSectorPage,
  CreateSectorPage,
  CreateSubSectorPage,
  CreateUserSectorPage,
  DisplayChildSubSectorPage,
  DisplaySectorPage,
  DisplaySubSectorPage,
  LoginPage,
} from "../pages";
import { RootLayout } from "../layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <DisplaySectorPage /> },
      { path: "sub-sector", element: <DisplaySubSectorPage /> },
      { path: "add-sector", element: <CreateSectorPage /> },
      { path: "add-sub-sector", element: <CreateSubSectorPage /> },
      { path: "child-sub-sector", element: <DisplayChildSubSectorPage /> },
      { path: "add-child-sub-sector", element: <CreateChildSubSectorPage /> },
      { path: "add-user-sector", element: <CreateUserSectorPage /> },
    ],
  },
]);

export default routes;
