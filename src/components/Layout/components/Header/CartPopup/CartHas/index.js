import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CartPopupModules } from '~/CssModules';
import chongnangaw from "~/assets/img/chongnangaw/AW- Chống nắng.jpg"

const cx = CartPopupModules();

function CartHas() {
    return (
        <div className={cx('cart-has')}>
            <ul className="list-group">
                <li className='list-group-item d-flex align-items-center border-0'>
                    <Link><img src={chongnangaw} className={cx('cart-img')} alt="anh san pham" /></Link>
                    <div className={cx('cart-info')}>
                        <Link className={cx('title')}>Avovado Makeup Melter</Link>
                        <div className={cx('quantity')}>Qty: <span>1</span></div>
                        <div className={cx('price')}><span>125</span>đ</div>
                    </div>
                    <div className={cx('cart-remove')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
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
                    <Link>view cart</Link>
                </button>
                <button className={cx('btn-item', 'hover-translate')}>
                    <Link>check out</Link>
                </button>
            </div>
        </div>
    );
}

export default CartHas;
