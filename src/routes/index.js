import Home from "~/page/Home"
import Product from "~/page/Product"

const publicRoutes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/products",
        component: <Product />
    }
]

export {publicRoutes}