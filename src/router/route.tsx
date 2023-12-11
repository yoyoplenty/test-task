import { createBrowserRouter } from "react-router-dom";
import {
  CreateChildSubSectorPage,
  CreateSectorPage,
  CreateSubSectorPage,
  CreateUserSectorPage,
  DisplayChildSubSectorPage,
  DisplaySectorPage,
  DisplaySubSectorPage,
  DisplayUserSectorPage,
  LoginPage,
} from "../pages";
import { RootLayout } from "../layout";
import { AuthorizeUser } from "../utils/middleware/auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: "sector",
        element: (
          <AuthorizeUser>
            <DisplaySectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "sub-sector",
        element: (
          <AuthorizeUser>
            <DisplaySubSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "add-sector",
        element: (
          <AuthorizeUser>
            <CreateSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "add-sub-sector",
        element: (
          <AuthorizeUser>
            <CreateSubSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "child-sub-sector",
        element: (
          <AuthorizeUser>
            <DisplayChildSubSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "add-child-sub-sector",
        element: (
          <AuthorizeUser>
            <CreateChildSubSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "user-sector",
        element: (
          <AuthorizeUser>
            <DisplayUserSectorPage />
          </AuthorizeUser>
        ),
      },
      {
        path: "add-user-sector",
        element: (
          <AuthorizeUser>
            <CreateUserSectorPage />
          </AuthorizeUser>
        ),
      },
    ],
  },
]);

export default routes;
