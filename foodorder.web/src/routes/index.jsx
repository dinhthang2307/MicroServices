import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const Routes = () => {
    const { token } = useAuth();
    // Route configurations go here
    const routesForPublic = [
        {
          path: "/",
          element:<HomePage/>,
        },
        {
          path: "/about-us",
          element: <div>About Us</div>,
        },
        {
            path: "/login",
            element: <LoginPage />,
          },
          {
              path: "/register",
              element: <RegisterPage />,
            },
    ];

    const routesForAuthenticatedOnly = [
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/",
              element: <div>User Home Page</div>,
            },
            {
              path: "/profile",
              element: <div>User Profile</div>,
            },
            {
              path: "/logout",
              element: <div>Logout</div>,
            },
          ],
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
          path: "/",
          element: <HomePage/>,
        },
        
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
      ]);

      return <RouterProvider router={router} />;

  };

  export default Routes;
