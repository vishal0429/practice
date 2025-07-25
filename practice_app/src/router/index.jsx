import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import { routers } from "./Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routers.privateRoutes.DASHBOARD.path} replace />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      ...Object.values(routers.privateRoutes).map((item) => ({
        path: item.path,
        element: item.element,
      })),
    ],
  },
]);

export default router;
