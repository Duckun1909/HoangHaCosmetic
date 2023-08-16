import { HeaderModules } from '~/CssModules';
import {
    faAngleDown,
    faBagShopping,
    faClose,
    faEnvelope,
    faHeart,
    faLocationDot,
    faSearch,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '~/assets/img/logo/logo_khong_nen.png';
import { useState } from 'react';
import React from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';

import SubMenu from './SubMenu';
import SearchModal from './SearchModal';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import CartPopup from './CartPopup';

const cx = HeaderModules();

function Header() {
    const [visible, setVisible] = useState(false);
    function handleVisible(vis) {
        setVisible(vis);
    }

    const [menuLinkActive, setMenuLinkActive] = useState([true, false, false, false, false]);
    function toggleActvie(id) {
        console.log(id);
        let actives = menuLinkActive.map((active, index) => {
            index === id ? (active = true) : (active = false);
            return active;
        });
        setMenuLinkActive(actives);
    }

    const [loginModalVisible, setLoginModalVisible] = useState(false);
    function handleVisibleLogin(vis) {
        setLoginModalVisible(vis);
    }

    return (
        <div className={cx('wrapper', 'container-flud')}>
            <div className={cx('campbar')}>
                <span className={cx('content')}>20% OFF EVERYTHING – USE CODE:FLASH20 – ENDS SUNDAY</span>
                <button className={cx('close')}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>

            <div className={cx('topbar', 'd-flex align-items-center justify-content-between pt-0 pb-0 p-4')}>
                <div className={cx('item')}>
                    <span className={cx('address', 'd-inline-flex align-items-center')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                        <Link to="/contact">Store Location</Link>
                    </span>
                    <span className={cx('split')}></span>
                    <span className={cx('mail', 'd-inline-flex align-items-center')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                        <Link to="mailto:ducleader2003@gmail.com">ducleader2003@gmail.com</Link>
                    </span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('address', 'd-inline-flex align-items-center')}>
                        <Link to="/contact">Contact</Link>
                    </span>
                    <span className={cx('split')}></span>
                    <span className={cx('mail', 'd-inline-flex align-items-center')}>
                        <Link to="/faq">Faq</Link>
                    </span>
                </div>
            </div>

            <div className={cx('navbar', 'row gx-0 pt-0 pb-0 p-2 align-items-center')}>
                <div className="col-6">
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img alt="logo" src={logo} />
                        </Link>
                    </div>

                    <nav className={cx('menu')}>
                        <ul className="list-group list-group-horizontal position-relative">
                            <li className="list-group-item border-0">
                                <Link
                                    onClick={() => toggleActvie(0)}
                                    className={cx('menu-link', 'text-decoration-none text-dark', {
                                        active: menuLinkActive[0],
                                    })}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <Tippy
                                arrow="false"
                                placement="bottom"
                                interactive="true"
                                zIndex={2}
                                animation="translate"
                                content={<SubMenu />}
                            >
                                <li className="list-group-item border-0">
                                    <Link
                                        onClick={() => toggleActvie(1)}
                                        className={cx('menu-link', 'text-decoration-none text-dark', {
                                            active: menuLinkActive[1],
                                        })}
                                        to="/products"
                                    >
                                        Product
                                    </Link>
                                    <FontAwesomeIcon icon={faAngleDown} className="text-white fs-5 ms-1" />
                                </li>
                            </Tippy>
                            <li className="list-group-item border-0">
                                <Link
                                    onClick={() => toggleActvie(2)}
                                    className={cx('menu-link', 'text-decoration-none text-dark', {
                                        active: menuLinkActive[3],
                                    })}
                                    to="/aboutUs"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="list-group-item border-0">
                                <Link
                                    onClick={() => toggleActvie(3)}
                                    className={cx('menu-link', 'text-decoration-none text-dark', {
                                        active: menuLinkActive[4],
                                    })}
                                    to="contact"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="list-group-item border-0">
                                <Link
                                    onClick={() => toggleActvie(4)}
                                    className={cx('menu-link', 'text-decoration-none text-dark', {
                                        active: menuLinkActive[5],
                                    })}
                                    to="faq"
                                >
                                    Faq
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={cx('actions', 'list-group list-group-horizontal col-6 justify-content-end')}>
                    <div
                        onClick={() => {
                            handleVisible(true);
                        }}
                        className={cx('search', 'list-group-item bg-transparent border-0', { 'p-15-hor': true })}
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                    </div>
                    <SearchModal handle={handleVisible} visible={visible} />
                    <Tippy
                        interactive={true}
                        zIndex={1}
                        animation="lengthen"
                        placement="bottom-end"
                        content={<UserMenu />}
                    >
                        <div
                            onClick={() => {
                                handleVisibleLogin(true);
                            }}
                            className={cx('user', 'list-group-item bg-transparent border-0', { 'p-15-hor': true })}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faUserAlt} />
                        </div>
                    </Tippy>
                    <LoginModal animation={false} handleVisible={handleVisibleLogin} visible={loginModalVisible} />
                    <div className={cx('wishlist', 'list-group-item bg-transparent border-0', { 'p-15-hor': true })}>
                        <Link to="/wishlist">
                            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                        </Link>
                    </div>
                    <Tippy animation="translate" interactive={true} placement="bottom-end" content={<CartPopup />}>
                        <div
                            className={cx('cart', 'list-group-item bg-transparent border-0 position-relative', {
                                'p-15-hor': true,
                            })}
                        >
                            <Link>
                                <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                            </Link>
                            <span className={cx('cart-size', 'position-absolute')}>1</span>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
