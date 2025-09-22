import DashboardRoute from "./DashboardRoute";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
const Router=createBrowserRouter([
    {
    path: "/",
    children: [
      {
        index: true, 
        element: <AuthRoute/>, 
      },

      ...DashboardRoute,
      
    ],
  },
]);
export default Router;