import MovieDetail from "../components/MovieDetail/MoiveDetail"
import Home from "../page/Home"
import DefaultLayout from "../DefaultLayout/index."
import SingIn from "../components/SignIn/SignIn"
import Register from "../components/Register/Register"
import MyList from "../components/MyList/MyList"
import Booking from "../components/Booking/Booking"
const publicRoutes = [
    {path: '/', component: Home, layout: DefaultLayout},
    {path: '/movie/:id', component: MovieDetail, layout: DefaultLayout},
    {path: '/login', component: SingIn},
    {path: '/register', component: Register},
    {path: '/booking/:id/:title/:name/:address/:showtime', component: Booking, layout: DefaultLayout},
    {path: '/mylist', component: MyList, layout: DefaultLayout}

]
const privateRoutes = []

export {publicRoutes, privateRoutes}