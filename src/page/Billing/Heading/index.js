import { Link } from "react-router-dom";
import { HeadingBillingModules } from "~/CssModules";

const cx = HeadingBillingModules()

function Heading({type}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('page-header')}>
                    <ul className="list-group justify-content-center list-group-horizontal">
                        <li className={cx('header-item', {'checked': type == 'cart'}, 'list-group-item')}>
                            <Link to='/cart'>shopping cart(3)</Link>
                        </li>
                        <li className={cx('header-item', {'checked': type == 'checkout'}, 'list-group-item')}>
                            <Link to='/checkout'>checkout</Link>
                        </li>
                        <li className={cx('header-item', {'checked': type == 'tracking'}, 'list-group-item')}>
                            <Link to='/order-tracking'>order tracking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Heading;