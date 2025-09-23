import RoomDetailPage from "../rooms/pages/RoomDetailPage";
import RoomsListPage from "../rooms/pages/RoomsListPage";


const roomRoute=[
    {
        path:"rooms",
        element:<RoomsListPage/>
    },
    {
         path: "room-detail/:id",
        element:<RoomDetailPage/>
    },
]

export default roomRoute;