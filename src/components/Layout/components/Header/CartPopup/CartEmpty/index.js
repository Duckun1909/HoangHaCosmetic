import { faSackXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CartPopupModules } from "~/CssModules";

const cx = CartPopupModules()

function CartEmpty() {
    return ( 
        <div className={cx('cart-empty')}>
            <div className={cx('item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faSackXmark} />
            </div>
            <div className={cx('item')}>
                <h6 className={cx('content')}>No product in the cart</h6>
            </div>
            <div className={cx('item')}>
                <Link to="/products" className={cx('gotoshop')}>Go to shop &rarr;</Link>
            </div>
        </div>
    );
}

export default CartEmpty;