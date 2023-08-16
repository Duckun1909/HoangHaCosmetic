import { Link } from 'react-router-dom';
import { UserMenuModules } from '~/CssModules';

const cx = UserMenuModules()

function UserMenu() {
    return (
        <div className={cx('wrapper', 'bg-light')}>
            <ul className={cx('list', 'text-align p-0 m-0')}>
                <li className={cx('list-item',"list-group-item border-0 pt-3 pb-3")}>
                    <Link to="/cart/order-tracking">order tracking</Link>
                </li>
                <li className={cx('list-item',"list-group-item border-0 pt-3 pb-3")}>
                    <Link to="/account">my account</Link>
                </li>
                <li className={cx('list-item',"list-group-item border-0 pt-3 pb-3")}>
                    <Link to="/cart/checkout">check out</Link>
                </li>
                <li className={cx('list-item',"list-group-item border-0 pt-3 pb-3")}>
                    <Link to="/wishlist">wishlist</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserMenu;
