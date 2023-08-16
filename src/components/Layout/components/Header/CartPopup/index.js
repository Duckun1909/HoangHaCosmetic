import { CartPopupModules } from '~/CssModules';
import Forms from '~/components/Form';
import { Modal } from 'react-bootstrap';
import CartEmpty from './CartEmpty';
import CartHas from './CartHas';

const cx = CartPopupModules();

function CartPopup() {
    return (
        <div className={cx('wrapper')}>
            <CartHas />
            <div className={cx('item')}>
                <span className={cx('free-order')}>
                    free shipping on all <u><b>orders over $75</b></u>
                </span>
            </div>
        </div>
    );
}

export default CartPopup;
