import { createBrowserRouter } from "react-router-dom";
import {
  AddUserSectorPage,
  CreateSectorPage,
  DisplaySector,
  DisplaySubSector,
  DisplaySubSectorChild,
  LoginPage,
} from "../pages";
// import AuthorizeUser from "../utils/middleware/auth";
import { RootLayout } from "../layout";
import CreateSector from "../components/sector/createSector";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <DisplaySector /> },
      { path: "sub-sector", element: <DisplaySubSector /> },
      { path: "sub-sector-child", element: <DisplaySubSectorChild /> },
    ],
  },
]);

export default routes;
