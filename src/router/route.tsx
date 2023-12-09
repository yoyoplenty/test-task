import { createBrowserRouter } from "react-router-dom";
import { AddUserSectorPage, CreateSectorPage, LoginPage } from "../pages";
// import AuthorizeUser from "../utils/middleware/auth";
import { RootLayout } from "../layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { index: true, element: <LoginPage /> },
      { path: "sector", element: <AddUserSectorPage /> },
    ],
  },
]);

export default routes;
