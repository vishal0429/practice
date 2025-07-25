import Dashboard from "../pages/Dashboard/Dashboard";
import PaymentGateway from "../pages/Payment/PaymentGateway";
import User from "../pages/User/User";

export const routers = {
//   publicRoutes: {
//     LOGIN: {
//       path: "/login",
//       element: Login,
//     },
//     REGISTER: {
//       path: "/register",
//       element: Register,
//     }
//   },
  privateRoutes: {
    DASHBOARD: {
      path: "/dashboard",
      element: <Dashboard />,
      pageName: "Dashboard",
      sidebar: {
        show: true,
      }
    },

    PAYMENTGATEWAY: {
      path: "/payment-gateway",
      element: <PaymentGateway />,
      pageName: "Payments",
      sidebar: {
        show: true,
      }
    },

    USER: {
      path: "/user",
      element: <User />,
      pageName: "Users",
      sidebar: {
        show: true,
      },
    },
  },
};