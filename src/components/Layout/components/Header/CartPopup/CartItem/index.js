import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import chongnangaw from '~/assets/img/chongnangaw/AW- Chống nắng.jpg';
import { CartItemModules } from '~/CssModules';

const cx = CartItemModules();

function CartItem({ noRemove }) {
    return (
        <>
            <Link>
                <img width={78} src={chongnangaw} className={cx('cart-img')} alt="anh san pham" />
            </Link>
            <div className={cx('cart-info')}>
                <Link className={cx('title')}>Avovado Makeup Melter</Link>
                <div className={cx('quantity')}>
                    Qty: <span>1</span>
                </div>
                <div className={cx('price')}>
                    <span>125</span>đ
                </div>
            </div>
            {noRemove || (
                <div className={cx('cart-remove')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            )}
        </>
    );
}

export default CartItem;
