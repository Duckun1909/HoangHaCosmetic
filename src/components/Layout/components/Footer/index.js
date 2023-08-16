import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FooterModules } from '~/CssModules';

const cx = FooterModules();

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-start')}>
                <div className="container-flud m-5 mt-0 mb-0">
                    <div className="row">
                        <div className={cx('item', 'col')}>
                            <h3 className={cx('title')}>categories</h3>
                            <div className={cx('list')}>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>cleaners & toners</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>moisturisers</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>body care</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>eyes, lips & neck</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>rebalancing oils</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>self tanners</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>make-up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <h3 className={cx('title')}>customer service</h3>
                            <div className={cx('list')}>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Contact Us</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Track Your Order</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Returns Policy</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Delivery Information</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Loyalty Program</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Help & FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <h3 className={cx('title')}>about us</h3>
                            <div className={cx('list')}>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>About Us</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Careers</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Where to Buy</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Investor Relations</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0">
                                        <Link className={cx('list-link')}>Student Discount</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <h3 className={cx('title')}>categories</h3>
                            <div className={cx('content')}>
                                <h5 className={cx('heading')}>
                                    Sign up for our mailing list to be the first to receive updates from us about new
                                    products
                                </h5>
                                <div className={cx('require-mail')}>
                                    <input placeholder="Your email address..." />
                                    <button>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                                    </button>
                                </div>
                                <div className={cx('social-link')}>
                                    <ul className="list-group list-group-horizontal">
                                        <li className="list-group-item bg-transparent border-0 ps-0">
                                            <Link>
                                                <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                            </Link>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0 ps-0">
                                            <Link>
                                                <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                                            </Link>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0 ps-0">
                                            <Link>
                                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                            </Link>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0 ps-0">
                                            <Link>
                                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('content-end')}>
                <div className={cx('item', 'm-5 mt-0 mb-0')}>
                    <div className={cx('copyright')}>
                        <span>© Copyright 2023 Hoang Ha Cosmetics</span>
                    </div>

                    <div className={cx('payment')}>
                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2020/06/paymet-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
