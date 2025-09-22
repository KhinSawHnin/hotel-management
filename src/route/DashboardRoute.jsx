import Dashboard from "../common/components/Dashboard";
import HomePage from "../common/pages/HomePage"
const DashboardRoute=[
    {
        path:"/dashboard",
        element:<HomePage/>,
        children:[
            {
                index: true,
                element:<Dashboard/>
               
            },
            
        ]
    }
]
export default DashboardRoute;