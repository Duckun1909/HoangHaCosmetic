import Headerstyles from '~/components/Layout/components/Header/Header.module.scss';
import Footerstyles from '~/components/Layout/components/Footer/Footer.module.scss';
import Submenustyles from '~/components/Layout/components/Header/SubMenu/Submenu.module.scss';
import SearchModalmenustyles from '~/components/Layout/components/Header/SearchModal/SearchModal.module.scss';
import Formstyles from '~/components/Form/Forms.module.scss';
import LoginModalstyles from '~/components/Layout/components/Header/LoginModal/LoginModal.module.scss';
import UserMenustyles from '~/components/Layout/components/Header/UserMenu/UserMenu.module.scss';
import CartPopupstyles from '~/components/Layout/components/Header/CartPopup/CartPopup.module.scss';
import Sliderstyles from '~/page/Home/Sliders/Sliders.module.scss';
import TopCateStyles from '~/page/Home/TopCategory/TopCategory.module.scss';
import BannerStyles from '~/page/Home/Banner/Banner.module.scss';
import ProductItemStyles from '~/components/ProductItem/ProductItem.module.scss';
import ModalsStyles from '~/components/Modals/Modals.module.scss';
import ProductPreviewStyles from '~/components/ProductPreview/ProductPreview.module.scss';
import TrendingProductsStyles from '~/page/Home/TrendingProducts/TrendingProducts.module.scss';
import FeedbackStyles from '~/page/Home/Feedback/Feedback.module.scss';
import FeedbackItemStyles from '~/page/Home/Feedback/FeedbackItem/FeedbackItem.module.scss';
import TopBrandStyles from '~/page/Home/TopBrand/TopBrand.module.scss';
import ShareMomentStyles from '~/page/Home/ShareMoments/ShareMoments.module.scss';
import classNames from 'classnames/bind';

function HeaderModules() {
    const cx = classNames.bind(Headerstyles);
    return cx;
}

function FooterModules() {
    const cx = classNames.bind(Footerstyles);
    return cx;
}

function SubmenuModules() {
    const cx = classNames.bind(Submenustyles);
    return cx;
}

function SearchModalModules() {
    const cx = classNames.bind(SearchModalmenustyles);
    return cx;
}

function FormModules() {
    const cx = classNames.bind(Formstyles);
    return cx;
}

function LoginModalModules() {
    const cx = classNames.bind(LoginModalstyles);
    return cx;
}

function UserMenuModules() {
    const cx = classNames.bind(UserMenustyles);
    return cx;
}

function CartPopupModules() {
    const cx = classNames.bind(CartPopupstyles);
    return cx;
}

function SlidersModules() {
    const cx = classNames.bind(Sliderstyles);
    return cx;
}

function TopCateModules() {
    const cx = classNames.bind(TopCateStyles);
    return cx;
}

function BannerModules() {
    const cx = classNames.bind(BannerStyles);
    return cx;
}

function ProductItemModules() {
    const cx = classNames.bind(ProductItemStyles);
    return cx;
}

function ModalsModules() {
    const cx = classNames.bind(ModalsStyles);
    return cx;
}

function ProductPreviewModules() {
    const cx = classNames.bind(ProductPreviewStyles);
    return cx;
}

function TrendingProductsModules() {
    const cx = classNames.bind(TrendingProductsStyles);
    return cx;
}

function FeedbackModules() {
    const cx = classNames.bind(FeedbackStyles);
    return cx;
}

function FeedbackItemModules() {
    const cx = classNames.bind(FeedbackItemStyles);
    return cx;
}

function TopBrandModules() {
    const cx = classNames.bind(TopBrandStyles);
    return cx;
}

function ShareMomentModules() {
    const cx = classNames.bind(ShareMomentStyles);
    return cx;
}

export {
    HeaderModules,
    FooterModules,
    SubmenuModules,
    SearchModalModules,
    FormModules,
    LoginModalModules,
    UserMenuModules,
    CartPopupModules,
    SlidersModules,
    TopCateModules,
    BannerModules,
    ProductItemModules,
    ModalsModules,
    ProductPreviewModules,
    TrendingProductsModules,
    FeedbackModules,
    FeedbackItemModules,
    TopBrandModules,
    ShareMomentModules,
};
