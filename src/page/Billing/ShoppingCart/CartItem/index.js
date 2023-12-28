import { Link } from 'react-router-dom';
import { ShoppingCartModules } from '~/CssModules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = ShoppingCartModules();

function CartItem() {
    return (
        <>
            <tr className={cx('cart-item')}>
                <td className={cx('prd-thumbnail')} colSpan={5}>
                    <Link className={cx('prd-img')} to="/productdetail">
                        <img
                            alt="1"
                            src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2019/12/CHERRY-TINTED-LIP-BALM4-1020x1020.jpg.webp"
                        />
                    </Link>

                    <div className={cx('prd-name')}>
                        <Link to="/productdetail">avovado makeup melter - red</Link>
                    </div>
                </td>
                <td className={cx('prd-price')}>$35</td>
                <td className={cx('prd-quantity')}>
                    <div className={cx('input-number')}>
                        <button className={cx('plus')}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                            inputMode="numeric"
                            type="number"
                            min={1}
                            value={1}
                            autoComplete="off"
                            max={20}
                            name="quantity"
                        />
                        <button className={cx('minus')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </td>
                <td className={cx('prd-subtotal')}>$35</td>
                <td className={cx('prd-remove')}>
                    <span>
                        <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                    </span>
                </td>
            </tr>
        </>
    );
}

export default CartItem;
