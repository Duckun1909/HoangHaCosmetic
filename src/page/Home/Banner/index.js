import { Link } from 'react-router-dom';
import { BannerModules } from '~/CssModules';
import ProductItem from '~/components/ProductItem';

const cx = BannerModules();

function Banner() {
    return (
        <div className={cx('wrapper', 'wrapper-item container-flud')}>
            <div className="row g-0">
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-static': true })}>
                    <Link className={cx('img')}>
                        <img
                            width="100%"
                            src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/img4-1.jpg.webp"
                        />
                    </Link>

                    <div className={cx('content')}>
                        <h2 className={cx('title')}>
                            spring <br /> collection
                        </h2>
                        <Link className={cx('gotoshop')}>shop now</Link>
                    </div>
                </div>
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-static': true })}>
                    <Link className={cx('img')}>
                        <img
                            width="100%"
                            src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/img4-2.jpg.webp"
                        />
                    </Link>

                    <div className={cx('content')}>
                        <h2 className={cx('title')}>
                            new <br /> arrivals
                        </h2>
                        <Link className={cx('gotoshop')}>shop now</Link>
                    </div>
                </div>
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-bestseller': true })}>
                    <div className={cx('img')}></div>

                    <div className={cx('content')}>
                        <div>
                            <h2 className={cx('title')}>bestseller</h2>
                            <Link className={cx('gotoshop')}>explore all products</Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-products': true })}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <ProductItem active />
                            </div>
                            <div className="col-6">
                                <ProductItem />
                            </div>
                            <div className="col-6">
                                <ProductItem />
                            </div>
                            <div className="col-6">
                                <ProductItem />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-onlyimage': true })}></div>
                <div className={cx('item', 'col-12 col-sm-12 col-md-6', { 'banner-widget': true })}>
                    <div className={cx('content')}>
                        <h5 className={cx('top-title')}>SALE UP TO 30% OFF</h5>
                        <h2 className={cx('title')}>NEW & <br/> EXCLUSIVE</h2>
                        <h6 className={cx('sub-title')}>
                            Discover the new, and exclusive, benefit Porefessional Super Setter Setting Spray!
                        </h6>
                        <button className={cx('button', 'hover-fade')}>
                            <Link>shop now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
