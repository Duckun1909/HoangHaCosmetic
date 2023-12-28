import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CartPopupModules } from '~/CssModules';
import chongnangaw from "~/assets/img/chongnangaw/AW- Chống nắng.jpg"
import CartItem from '../CartItem';

const cx = CartPopupModules();

function CartHas() {
    return (
        <div className={cx('cart-has')}>
            <ul className="list-group">
                <li className='list-group-item d-flex align-items-center border-0'>
                    <CartItem />
                </li>
            </ul>

            <div className={cx('cart-total')}>
                <h4 className={cx('title')}>total:</h4>
                <h6 className={cx('price')}>
                    <span>100</span>
                    đ
                </h6>
            </div>

            <div className={cx('buttons')}>
                <button className={cx('btn-item', 'hover-translate')}>
                    <Link to="/cart">view cart</Link>
                </button>
                <button className={cx('btn-item', 'hover-translate')}>
                    <Link to="/checkout">check out</Link>
                </button>
            </div>
        </div>
    );
}

export default CartHas;
