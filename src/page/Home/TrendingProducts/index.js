import Slider from 'react-slick';
import { TrendingProductsModules } from '~/CssModules';
import ProductItem from '~/components/ProductItem';

import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = TrendingProductsModules();

function TrendingProducts({ titleComponent }) {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('title')}>
                <h3>{titleComponent}</h3>
            </div>

            <div className={cx('list')}>
                <Slider ref={sliderRef} {...settings}>
                    <div className="p-3 pt-0 pb-0">
                        <ProductItem />
                    </div>
                    <div className="p-3 pt-0 pb-0">
                        <ProductItem />
                    </div>
                    <div className="p-3 pt-0 pb-0">
                        <ProductItem />
                    </div>
                    <div className="p-3 pt-0 pb-0">
                        <ProductItem />
                    </div>
                    <div className="p-3 pt-0 pb-0">
                        <ProductItem />
                    </div>
                </Slider>
                <div className={cx('slider-arrows')}>
                    <button onClick={() => sliderRef.current.slickPrev()} className={cx('btn-prev')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                    </button>
                    <button onClick={() => sliderRef.current.slickNext()} className={cx('btn-next')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrendingProducts;
