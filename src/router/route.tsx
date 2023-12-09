import { createBrowserRouter } from "react-router-dom";
import { AddUserSectorPage, CreateSectorPage, LoginPage } from "../pages";
// import AuthorizeUser from "../utils/middleware/auth";
import { RootLayout } from "../layout";
import CreateSector from "../components/sector/createSector";
import Sector from "../pages/sector/displaySector";
import DisplaySubSector from "../pages/sector/displaySubSector";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <Sector /> },
      { path: "sub-sector", element: <DisplaySubSector /> }
    ],
  },
]);

export default routes;
