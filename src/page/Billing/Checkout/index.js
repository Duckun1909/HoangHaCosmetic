import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Menu } from 'antd';
import Input from 'antd/es/input/Input';
import SubMenu from 'antd/es/menu/SubMenu';
import TextArea from 'antd/es/input/TextArea';
import { CheckoutModules } from '~/CssModules';
import CartItem from '~/components/Layout/components/Header/CartPopup/CartItem';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { useState } from 'react';

const cx = CheckoutModules();

function Checkout() {
    const [showCouponForm, setShowCouponForm] = useState(false);

    var handleToggleCouponForm = (visible) => {
        setShowCouponForm(visible);
    };

    return (
        <div className={cx('wrapper', 'container')}>
            <div className={cx('content')}>
                <div className={cx('checkout-coupon', 'mb-5')}>
                    <div className={cx('coupon-toggle')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faTags} />
                        <span>have a coupon? </span>
                        <span className={cx('btn-toggle')} onClick={() => handleToggleCouponForm(!showCouponForm)}>
                            click here to enter your code
                        </span>
                    </div>
                    {/* <div className={cx('coupon-alert')}>
                        <div className={cx('alert-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faClone} />
                            <span className={cx('title')}>Coupon "1111" does not exist!</span>
                        </div>
                    </div> */}
                    <form className={cx('coupon-form', 'text-center', {'show':showCouponForm})}>
                        <p>If you have a coupon code, please apply it below.</p>
                        <div className='row g-0'>
                            <input placeholder="Coupon code" className='col-12 col-sm-12 col-md-12 col-lg-9' />
                            <button className="hover-default col-12 col-sm-12 col-md-12 col-lg-3">Apply Coupon</button>
                        </div>
                    </form>
                </div>

                <div className={cx('billing-details', 'row')}>
                    <div className={cx('detail-info', 'col-12 col-sm-12 col-md-12 col-lg-8')}>
                        <h1 className="mb-5">Billing details</h1>
                        <Form name="order-info-form" autoComplete="off" layout="vertical">
                            <Form.Item
                                label="Fullname"
                                name="fullname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Shipping address"
                                name="shipping-address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input shipping address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Order notes (optional)" name="order-notes">
                                <TextArea placeholder="Notes about your order, e.g. special notes for delivery." />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className={cx('detail-prd', 'col-12 col-sm-12 col-md-12 col-lg-4')}>
                        <div className="p-5 border-black border">
                            <h2>Product</h2>
                            <ul className={cx('prd-list', 'list-group')}>
                                <li className="list-group-item border-0 d-flex p-0">
                                    <CartItem noRemove />
                                </li>
                            </ul>

                            <div className={cx('subtotal', { 'detail-prd-item': true })}>
                                <h3>Subtotal</h3>
                                <span>$90.00</span>
                            </div>

                            <div className={cx('shipping-method', { 'detail-prd-item': true })}>
                                <h3>Shipping</h3>
                                <div>
                                    <div>
                                        <input type="radio" className='align-middle me-2' name="shipping" id="freeship" />
                                        <label htmlFor="freeship">Free shipping</label>
                                    </div>
                                    <div>
                                        <input type="radio" className='align-middle me-2' name="shipping" id="flat-rate" />
                                        <label htmlFor="flat-rate">Flat rate</label>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('total', { 'detail-prd-item': true }, 'border-0')}>
                                <h3>Total</h3>
                                <span>$90.00</span>
                            </div>

                            <div className={cx('payment-method')}>
                                <Accordion className="p-4 border border-secondary-subtle">
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <input type="radio" className="align-middle me-2" name="payment" id="direct-bank" />
                                                <label htmlFor="direct-bank">Direct bank transfer</label>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Make your payment directly into our bank account. Please use your Order
                                                ID as the payment reference. Your order will not be shipped until the
                                                funds have cleared in our account.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <input type="radio" className="align-middle me-2" name="payment" id="cash" />
                                                <label htmlFor="cash">Cash on delivery</label>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Pay with cash upon delivery.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <button className={cx('place-order', { 'hover-default': true })}>place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
