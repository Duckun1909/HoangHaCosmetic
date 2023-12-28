import { HeaderModules } from '~/CssModules';
import {
    faAngleDown,
    faBagShopping,
    faBars,
    faClose,
    faEnvelope,
    faHeart,
    faLocationDot,
    faSearch,
    faStore,
    faUserAlt,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '~/assets/img/logo/logo_khong_nen.png';
import { useEffect, useState } from 'react';
import React from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';

import SubMenu from './SubMenu';
import SearchModal from './SearchModal';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import CartPopup from './CartPopup';
import { Menu } from 'antd';

const cx = HeaderModules();

function Header({ typeName }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [headerResponsive, setHeaderResponsive] = useState(windowWidth <= 991 ? true : false);
    const [showSidebar, setShowSidebar] = useState(false);

    var checkWindowWidth = (width) => {
        if (width <= 991) {
            setHeaderResponsive(true);
        } else {
            setHeaderResponsive(false);
        }
    };

    window.addEventListener('resize', function () {
        checkWindowWidth(this.innerWidth);
    });

    const [visible, setVisible] = useState(false);
    function handleVisible(vis) {
        setVisible(vis);
        console.log(1);
    }

    const [menuLinkActive, setMenuLinkActive] = useState([true, false, false, false, false]);
    function toggleActvie(id) {
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

    const items = [
        {
            danger: true,
            label: (
                <Link
                    onClick={() => toggleActvie(0)}
                    className={cx('menu-link', 'text-decoration-none text-dark', {
                        active: menuLinkActive[0],
                    })}
                    to="/"
                >
                    Home
                </Link>
            ),
            key: 'home',
        },
        {
            label: (
                <Link
                    onClick={() => toggleActvie(1)}
                    className={cx('menu-link', 'text-decoration-none text-dark', {
                        active: menuLinkActive[1],
                    })}
                >
                    Product
                </Link>
            ),
            key: 'product',
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting 1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting 2',
                        },
                        {
                            label: 'Option 3',
                            key: 'setting 3',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <Link
                    onClick={() => toggleActvie(2)}
                    className={cx('menu-link', 'text-decoration-none text-dark', {
                        active: menuLinkActive[2],
                    })}
                    to="/about-us"
                >
                    About Us
                </Link>
            ),
            key: 'about-us',
        },
        {
            label: (
                <Link
                    onClick={() => toggleActvie(3)}
                    className={cx('menu-link', 'text-decoration-none text-dark', {
                        active: menuLinkActive[3],
                    })}
                    to="/contact"
                >
                    Contact
                </Link>
            ),
            key: 'contact',
        },
        {
            label: (
                <Link
                    onClick={() => toggleActvie(4)}
                    className={cx('menu-link', 'text-decoration-none text-dark', {
                        active: menuLinkActive[4],
                    })}
                    to="/faq"
                >
                    Faq
                </Link>
            ),
            key: 'faq',
        },
    ];

    return (
        <div
            className={cx(
                'wrapper',
                'container-fluid p-0',
                { [typeName]: true },
                { 'header-responsive': headerResponsive },
            )}
        >
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
                {headerResponsive && (
                    <div className={cx('sidebar', ' col-md-4 col-4 col-sm-4')}>
                        <FontAwesomeIcon
                            onClick={() => {
                                setShowSidebar(true);
                            }}
                            className={cx('icon')}
                            icon={faBars}
                        />
                    </div>
                )}

                <div className="col-4 col-sm-4 col-xxl-6 col-lg-8 col-xl-6 col-md-4 d-flex align-items-center">
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img alt="logo" src={logo} />
                        </Link>
                    </div>

                    <nav className={cx('menu', { show: showSidebar })}>
                        {headerResponsive && (
                            <div className="bg-danger text-end p-4">
                                <span onClick={() => setShowSidebar(false)} style={{ cursor: 'pointer' }}>
                                    <span className="fs-5 me-3 text-uppercase text-white">close</span>
                                    <FontAwesomeIcon
                                        className="fs-4 text-white"
                                        style={{ verticalAlign: 'sub' }}
                                        icon={faXmark}
                                    />
                                </span>
                            </div>
                        )}

                        <Menu mode={headerResponsive ? 'inline' : 'horizontal'} items={items} />
                    </nav>
                </div>

                <div
                    className={cx(
                        'actions',
                        'list-group list-group-horizontal col-md-4 col-4 col-sm-4 col-xxl-6 col-lg-4 col-xl-6 justify-content-end',
                    )}
                >
                    {headerResponsive || (
                        <>
                            <div
                                onClick={() => {
                                    handleVisible(true);
                                }}
                                className={cx('search', 'list-group-item bg-transparent border-0', {
                                    'p-15-hor': true,
                                    'actions-item': true,
                                })}
                            >
                                <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                            </div>
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
                                    className={cx('user', 'list-group-item bg-transparent border-0', {
                                        'p-15-hor': true,
                                        'actions-item': true,
                                    })}
                                >
                                    <FontAwesomeIcon className={cx('icon')} icon={faUserAlt} />
                                </div>
                            </Tippy>
                            <div
                                className={cx('wishlist', 'list-group-item bg-transparent border-0', {
                                    'p-15-hor': true,
                                    'actions-item': true,
                                })}
                            >
                                <Link to="/wishlist">
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </Link>
                            </div>
                        </>
                    )}
                    <SearchModal handle={handleVisible} visible={visible} />
                    <LoginModal animation={false} handleVisible={handleVisibleLogin} visible={loginModalVisible} />
                    <Tippy animation="translate" interactive={true} placement="bottom-end" content={<CartPopup />}>
                        <div
                            className={cx('cart', 'list-group-item bg-transparent border-0 position-relative', {
                                'p-15-hor': true,
                                'actions-item': true,
                            })}
                        >
                            <Link>
                                <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                            </Link>
                            <span className={cx('cart-size', 'position-absolute')}>1</span>
                        </div>
                    </Tippy>
                </div>

                {headerResponsive && (
                    <div
                        className="row position-fixed z-2 bottom-0 bg-white g-0 start-0"
                        style={{ boxShadow: '0 1px 12px 2px hsla(0,0%,56%,.3)', width: '100%' }}
                    >
                        <div className="col text-center fs-3 p-4 ">
                            <Link to="/products">
                                <FontAwesomeIcon className="text-black text-hover" icon={faStore} />
                            </Link>
                        </div>

                        <div
                            onClick={() => {
                                handleVisibleLogin(true);
                            }}
                            className="col text-center fs-3 p-4 text-hover"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <FontAwesomeIcon className="text-black text-hover" icon={faUserAlt} />
                        </div>


                        <div
                            onClick={() => {
                                handleVisible(true);
                            }}
                            className="col text-center fs-3 p-4 text-hover"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <FontAwesomeIcon className="text-black text-hover" icon={faSearch} />
                        </div>

                        <div className="col text-center fs-3 p-4 text-hover">
                            <Link to="/wishlist">
                                <FontAwesomeIcon className="text-black text-hover" icon={faHeart} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
