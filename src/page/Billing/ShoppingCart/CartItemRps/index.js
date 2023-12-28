import { Link } from 'react-router-dom';
import { ShoppingCartModules } from '~/CssModules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = ShoppingCartModules();

function CartItemRps() {
    return (    
        <div className={cx('cart-item', { 'cart-irem-rps': true })}>
            <div className={cx('prd-thumbnail', 'mb-4')}>
                <Link className={cx('prd-img')} to="/productdetail">
                    <img
                        alt="1"
                        src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2019/12/CHERRY-TINTED-LIP-BALM4-1020x1020.jpg.webp"
                    />
                </Link>

                <div className={cx('prd-name')}>
                    <Link to="/productdetail">avovado makeup melter - red</Link>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <span className={cx('prd-price', 'me-4')}>$35</span>

                    <div className={cx('prd-quantity', 'd-inline-block')}>
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
                    </div>
                </div>

                <div>
                    <span className={cx('prd-subtotal', 'me-4')}>$35</span>
                    <div className={cx('prd-remove', 'd-inline-block')}>
                        <span>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItemRps;
