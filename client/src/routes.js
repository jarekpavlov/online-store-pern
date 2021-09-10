import {ADMIN_ROTE, BASKET_ROTE, DEVICE_ROTE, LOGIN_ROTE, REGISTRATION_ROTE, SHOP_ROTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes =[
    {
        path: ADMIN_ROTE,
        Component: Admin
    },
    {
        path: BASKET_ROTE,
        Component: Basket
    }
]

export const publicRoutes =[
    {
        path: SHOP_ROTE,
        Component: Shop
    },
    {
        path: LOGIN_ROTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROTE,
        Component: Auth
    },
    {
        path: DEVICE_ROTE+'/:id',
        Component: DevicePage
    }
]