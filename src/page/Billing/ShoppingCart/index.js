import { ShoppingCartModules } from '~/CssModules';

import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useState } from 'react';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CartItemRps from './CartItemRps';

const cx = ShoppingCartModules();

const { SubMenu } = Menu;

function ShoppingCart() {
    const [country, setCountry] = useState('Vietnam');
    const [region, setRegion] = useState('');

    const handleCountry = (country) => {
        console.log(country);
        setCountry(country);
    };

    const handleRegion = (region) => {
        setRegion(region);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content', 'container')}>
                <div className="row">
                    <table className={cx('page-cart', 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8')}>
                        <thead className={cx('cart-title')}>
                            <th>product</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>subtotal</th>
                            <th></th>
                        </thead>

                        <tbody className={cx('cart-content')}>
                            <CartItem />
                            <CartItem />
                        </tbody>

                        <div className={cx('cart-content', { rps: true })}>
                            <CartItemRps />
                        </div>

                        <tr className={cx('cart-actions')}>
                            <td colSpan={5} className={cx('actions')}>
                                <div>
                                    <div className={cx('coupon')}>
                                        <input placeholder="Coupon code" />
                                        <button className={cx('hover-default')}>apply coupon</button>
                                    </div>
                                    <Link className={cx('gotoshop')}>continue shopping</Link>
                                    <button className={cx('update-cart', { 'hover-default': true })}>
                                        update cart
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <div className={cx('cart-total', 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4')}>
                        <h2 className={cx('heading')}>cart totals</h2>
                        <div className={cx('shop-table')}>
                            <div className={cx('cart-subtotal')}>
                                <span className={cx('label')}>Subtotal</span>
                                <span className="fs-2">$495.00</span>
                            </div>

                            <div className={cx('cart-shipping', 'row')}>
                                <h2 className={cx('shipping-title', 'col-6')}>shipping</h2>
                                <div className={cx('shipping-content', 'col-6 p-0')}>
                                    <ul className={cx('shipping-method')}>
                                        <li>
                                            <input className="me-2" type="radio" name="shipping-method" />
                                            <label>Free shipping</label>
                                        </li>
                                        <li>
                                            <input className="me-2" type="radio" name="shipping-method" />
                                            <label>Flat rate</label>
                                        </li>
                                    </ul>

                                    <p className={cx('shipping-address')}>
                                        Shipping to
                                        <strong> 150 lương định của, hà nội, việt nam</strong>
                                    </p>

                                    <div className={cx('change-address')}>
                                        <Menu mode="inline" className="border-0">
                                            <SubMenu
                                                style={{
                                                    color: 'var(--black) !important',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    padding: '0',
                                                }}
                                                key="sub1"
                                                title="Edit address"
                                            >
                                                <Menu.ItemGroup key="g1">
                                                    <Menu.Item className="p-0 bg-white" key="1">
                                                        <CountryDropdown
                                                            style={{
                                                                outline: 'none',
                                                                lineHeight: '28px',
                                                                borderRadius: '6px',
                                                                padding: '6px 8px',
                                                                width: '100%',
                                                            }}
                                                            value={country}
                                                            onChange={(val) => handleCountry(val)}
                                                        />
                                                    </Menu.Item>
                                                    <Menu.Item className="p-0 bg-white" key="2">
                                                        <RegionDropdown
                                                            style={{
                                                                outline: 'none',
                                                                lineHeight: '28px',
                                                                borderRadius: '6px',
                                                                padding: '6px 8px',
                                                                width: '100%',
                                                            }}
                                                            defaultOptionLabel="Select Region"
                                                            country={country}
                                                            value={region}
                                                            onChange={(val) => handleRegion(val)}
                                                        />
                                                    </Menu.Item>

                                                    <Menu.Item
                                                        style={{
                                                            padding: '0',
                                                            border: '0',
                                                        }}
                                                        className="bg-white"
                                                    >
                                                        <input
                                                            style={{
                                                                outline: 'none',
                                                                lineHeight: '28px',
                                                                border: '1px solid ',
                                                                borderRadius: '6px',
                                                                padding: '3px',
                                                                width: '100%',
                                                            }}
                                                            type="text"
                                                            placeholder="Địa chỉ cụ thể"
                                                        />
                                                    </Menu.Item>

                                                    <Menu.Item
                                                        style={{
                                                            padding: '0',
                                                            width: '100%',
                                                            border: '0',
                                                            borderRadius: '0',
                                                        }}
                                                        className="bg-white"
                                                    >
                                                        <button
                                                            className={cx('edit-address', { 'hover-default': true })}
                                                        >
                                                            update
                                                        </button>
                                                    </Menu.Item>
                                                </Menu.ItemGroup>
                                            </SubMenu>
                                        </Menu>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('order-total')}>
                                <span className={cx('label')}>Total</span>
                                <span className="fs-1 fw-medium">$495.00</span>
                            </div>

                            <div className={cx('goto-checkout')}>
                                <button className={cx('hover-default')}>proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
