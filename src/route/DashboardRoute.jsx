import HomePage from "../common/pages/HomePage"
const DashboardRoute=[
    {
        path:"/dashboard",
        element:<HomePage/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            
        ]
    }
]
export default DashboardRoute;