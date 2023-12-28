import Checkout from './Checkout';
import Heading from './Heading';
import OrderTracking from './OrderTracking';
import ShoppingCart from './ShoppingCart';

function Billing({ type }) {
    let Comp;

    switch (type) {
        case 'checkout':
            Comp = Checkout;
            break;
        case 'cart':
            Comp = ShoppingCart;
            break;
        case 'tracking':
            Comp = OrderTracking;
    }

    return (
        <div>
            <Heading type={type} />
            <Comp />
        </div>
    );
}

export default Billing;
