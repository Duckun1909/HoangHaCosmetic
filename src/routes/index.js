import AboutUs from '~/page/AboutUs';
import Account from '~/page/Account';
import Billing from '~/page/Billing';
import Contact from '~/page/Contact';
import Home from '~/page/Home';
import Product from '~/page/Product';
import ProductDetail from '~/page/ProductDetail';
import WishList from '~/page/WishList';

const publicRoutes = [
    {
        path: '/',
        component: <Home />,
        name: "Home"
    },
    {
        path: '/products',
        component: <Product />,
        name:"Product"
    },
    {
        path: '/about-us',
        component: <AboutUs />,
        name: "AboutUs"
    },
    {
        path: '/contact',
        component: <Contact />,
        name:"Contact"
    },
    {
        path: '/productdetail',
        component: <ProductDetail />,
        name: "ProductDetail"
    },
    {
        path: '/cart',
        component: <Billing type="cart" />,
        name: "Billing"
    },
    {
        path: '/checkout',
        component: <Billing type="checkout" />,
        name: "Billing"
    },
    {
        path: '/order-tracking',
        component: <Billing type="tracking" />,
        name: "Billing"
    },
    {
        path: '/account',
        component: <Account currentRoute="dashboard" />,
        name: "Account"
    },
    {
        path: '/account/orders',
        component: <Account currentRoute="orders" />,
        name: "Account"
    },
    {
        path: '/account/addresses',
        component: <Account currentRoute="addresses" />,
        name: "Account"
    },
    {
        path: '/account/addresses/edit',
        component: <Account currentRoute="addressesForm" />,
        name: "Account"
    },
    {
        path: '/account/info',
        component: <Account currentRoute="info" />,
        name: "Account"
    },
    {
        path: '/wishlist',
        component: <WishList />,
        name: "WishList"
    },
];

export { publicRoutes };
