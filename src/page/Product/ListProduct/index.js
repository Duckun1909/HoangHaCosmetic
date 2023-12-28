import { ListProductModules } from '~/CssModules';
import { Grid3x3GapFill, Sliders2Vertical } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faList, faXmark } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '~/components/ProductItem';

const cx = ListProductModules();

function ListProduct({ setShowSidebar }) {
    return (
        <div className={cx('wrapper', 'col-12 col-sm-12 col-lg-9')}>
            <div className={cx('content')}>
                <div className={cx('top-bar')}>
                    <div className={cx('sorting')}>
                        <div    
                            onClick={() => setShowSidebar(true)}
                            className={cx('show-filter', 'border border-dark border-2 p-2')}
                        >
                            <Sliders2Vertical className="fs-1" />
                        </div>

                        <div className={cx('result-count')}>
                            <span>Showing the single result</span>
                        </div>

                        <div className={cx('sorting-bar')}>
                            <div className={cx('product-per-row')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faGripVertical} />
                                <Grid3x3GapFill className={cx('icon')} />
                                <FontAwesomeIcon className={cx('icon')} icon={faList} />
                            </div>

                            <div className={cx('sort-type')}>
                                <select className="">
                                    <option>default sorting</option>
                                    <option>sort by popularity</option>
                                    <option>sort by average rating</option>
                                    <option>sort by latest</option>
                                    <option>sort by price: low to high</option>
                                    <option>sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={cx('filters')}>
                        <span>
                            green
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                        </span>
                        <button className={cx('hover-default-text')}>clear all</button>
                    </div>
                </div>

                <div className={cx('product-list', 'row')}>
                    <div className="col-6 col-sm-6 col-md-4">
                        <ProductItem />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4">
                        <ProductItem />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4">
                        <ProductItem />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4">
                        <ProductItem />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4">
                        <ProductItem />
                    </div>
                </div>

                <div className={cx('product-loading')}></div>
            </div>
        </div>
    );
}

export default ListProduct;
