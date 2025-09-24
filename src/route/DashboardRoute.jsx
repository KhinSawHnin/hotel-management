import Dashboard from "../common/components/Dashboard";
import HomePage from "../common/pages/HomePage";
import bookingRoute from "./bookingRoute";
import financeRoute from "./financeRoute";
import guestsRoute from "./guestsRoute";
import roomRoute from "./roomRoute";
const DashboardRoute = [
  {
    path: "/dashboard",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      ...bookingRoute,
      ...roomRoute,
      ...guestsRoute,
      ...financeRoute
    ],
  },
];
export default DashboardRoute;
