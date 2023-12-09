import { createBrowserRouter } from "react-router-dom";
import { CreateChildSubSectorPage, CreateSectorPage, CreateSubSectorPage, LoginPage } from "../pages";
// import AuthorizeUser from "../utils/middleware/auth";
import { RootLayout } from "../layout";
import Sector from "../pages/sector/sector";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <Sector /> },
      { path: "add-sector", element: <CreateSectorPage /> },
      { path: "add-sub-sector", element: <CreateSubSectorPage /> },
      { path: "add-child-sub-sector", element: <CreateChildSubSectorPage /> },
    ],
  },
]);

export default routes;
