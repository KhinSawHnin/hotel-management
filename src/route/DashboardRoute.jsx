import Dashboard from "../common/components/Dashboard";
import HomePage from "../common/pages/HomePage"
import roomRoute from "./roomRoute";
const DashboardRoute=[
    {
        path:"/dashboard",
        element:<HomePage/>,
        children:[
            {
                index: true,
                element:<Dashboard/>
               
            },
            ...roomRoute,
            
        ]
    }
]
export default DashboardRoute;