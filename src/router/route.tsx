import { createBrowserRouter } from "react-router-dom";
import { CreateChildSubSectorPage, CreateSectorPage, CreateSubSectorPage, LoginPage } from "../pages";
import { RootLayout } from "../layout";
import Sector from "../pages/sector/displaySector";
import DisplaySubSector from "../pages/sector/displaySubSector";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <Sector /> },
      { path: "sub-sector", element: <DisplaySubSector /> },
      { path: "add-sector", element: <CreateSectorPage /> },
      { path: "add-sub-sector", element: <CreateSubSectorPage /> },
      { path: "add-child-sub-sector", element: <CreateChildSubSectorPage /> },
    ],
  },
]);

export default routes;
