import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageTitle from '~/components/PageTitle';
import { Link } from 'react-router-dom';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';

import { WishListModules } from '~/CssModules';

const cx = WishListModules();

function WishList() {
    return (
        <div className={cx('wrapper', 'container')}>
            <PageTitle currentPage="wishlist" />
            <table className="w-100 container" style={{ margin: '60px auto' }}>
                <tr className="border">
                    <th></th>
                    <th className="fs-4 fw-medium text-uppercase p-4 text-start">product name</th>
                    <th className="fs-4 fw-medium text-uppercase p-4 text-start">unit price</th>
                    <th className="fs-4 fw-medium text-uppercase p-4 text-start">stock status</th>
                    <th></th>
                </tr>

                <tbody className="border">
                    {/* no product added to wishlist */}
                    <tr>
                        <td className="d-flex align-items-center justify-content-evenly p-4">
                            <button
                                className="border border-black rounded-circle fs-4 p-1 text-center hover-background-text bg-white"
                                style={{ width: '20px', height: '20px' }}
                            >
                                <FontAwesomeIcon className=" align-text-top" icon={faXmark} />
                            </button>
                            <Link style={{ maxWidth: '80px' }}>
                                <img
                                    alt="1"
                                    width="100%"
                                    height="100%"
                                    src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2019/04/AVOCADO-MAKEUP-MELTER-1020x1020.jpg.webp"
                                />
                            </Link>
                        </td>
                        <td className="p-4 fs-4 text-capitalize ">
                            <Link className="text-decoration-none text-body-secondary">avovado makeup melter</Link>
                        </td>
                        <td className="p-4 fs-4 ">$35.00 - 40.00</td>
                        <td className="p-4 fs-5 ">
                            <span className="text-uppercase text-success p-2 border border-success border-2">
                                in stock
                            </span>
                        </td>
                        <td className="p-4 fs-5">
                            <Link className="text-decoration-none text-black text-hover">Select options</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={cx('item-response', 'row p-4 mb-5')}>
                <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 mb-3">
                        <Link to="/productdetail" style={{ maxWidth: '80px' }}>
                            <img
                                alt="1"
                                width="100%"
                                height="100%"
                                src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2019/04/AVOCADO-MAKEUP-MELTER-1020x1020.jpg.webp"
                            />
                        </Link>
                        <span className="fs-4">
                            <Link
                                to="/productdetail"
                                className="text-hover text-capitalize text-decoration-none text-body-secondary"
                            >
                                avovado makeup melter
                            </Link>
                            <div>$35.00 - 40.00</div>
                        </span>
                    </div>
                    <div className="d-flex gap-4 align-items-center">
                        <span className="fs-4 text-uppercase text-success p-2 border border-success border-2">
                            in stock
                        </span>
                        <Link to="/productdetail" className="fs-4 text-decoration-none text-black text-hover">
                            Select options
                        </Link>
                        <FontAwesomeIcon className="fs-4 text-danger" icon={faTrashCan} />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 mb-3">
                        <Link to="/productdetail" style={{ maxWidth: '80px' }}>
                            <img
                                alt="1"
                                width="100%"
                                height="100%"
                                src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2019/04/AVOCADO-MAKEUP-MELTER-1020x1020.jpg.webp"
                            />
                        </Link>
                        <span className="fs-4">
                            <Link
                                to="/productdetail"
                                className="text-hover text-capitalize text-decoration-none text-body-secondary"
                            >
                                avovado makeup melter
                            </Link>
                            <div>$35.00 - 40.00</div>
                        </span>
                    </div>
                    <div className="d-flex gap-4 align-items-center">
                        <span className="fs-4 text-uppercase text-success p-2 border border-success border-2">
                            in stock
                        </span>
                        <Link to="/productdetail" className="fs-4 text-decoration-none text-black text-hover">
                            Select options
                        </Link>
                        <FontAwesomeIcon className="fs-4 text-danger" icon={faTrashCan} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishList;
