import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages";
// import AuthorizeUser from "../utils/middleware/auth";
import { RootLayout } from "../layout";

const routes = createBrowserRouter([
  // {
  //   path: "/dashboard",
  //   element: (
  //     <AuthorizeUser>
  //       <DashboardLayout />
  //     </AuthorizeUser>
  //   ),
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { index: true, element: <DashboardPage /> },
  //     { path: "profile", element: <UserProfilePage /> },
  //   ],
  // },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { index: true, element: <LoginPage /> },
      // { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default routes;
