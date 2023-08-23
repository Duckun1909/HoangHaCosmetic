import AboutUs from "~/page/AboutUs"
import Contact from "~/page/Contact"
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
    },
    {
        path: "/about-us",
        component: <AboutUs />
    },
    {
        path: "/contact",
        component: <Contact />
    }
]

export {publicRoutes}