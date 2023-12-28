import { TopCateModules } from '~/CssModules';
import { Link, useAsyncError } from 'react-router-dom';
import kemchongnang from '~/assets/img/chongnangaw/PhotoRoom_20230619_154523.jpg';
import daugoi from '~/assets/img/daugoicapdegate/Dầu gội DEGATE 1.jpg';
import duongtrang from '~/assets/img/duongtrangaw/AW- Dưỡng Trắng 1.jpg';
import suatam from '~/assets/img/suatamdegate/Sữa Tắm DEGATE 1.jpg';
import sptang from '~/assets/img/sptang/Kỳ Ghét 1.jpg';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = TopCateModules();

function TopCategory() {
    const sliderRef = useRef();

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        dots: false,
        arrows: false,
        slidesPerRow: 1,
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
                <h3>top categories</h3>
            </div>

            <div className="container-flud">
                <div className={cx('content', 'row g-0')}>
                    <Slider ref={sliderRef} {...settings}>
                        <div className={cx('item', '')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-5.jpg.webp"></img>
                                </Link>
                            </div>
                            <button className={cx('button', 'hover-default')}>
                                <Link>bath & body</Link>
                            </button>
                        </div>
                        <div className={cx('item', '')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-4.jpg.webp"></img>
                                </Link>
                            </div>
                            <button className={cx('button', 'hover-default')}>
                                <Link>brushes</Link>
                            </button>
                        </div>
                        <div className={cx('item', '')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-3.jpg.webp"></img>
                                </Link>
                            </div>
                            <button className={cx('button', 'hover-default')}>
                                <Link>hair</Link>
                            </button>
                        </div>
                        <div className={cx('item', '')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-1.jpg.webp"></img>
                                </Link>
                            </div>
                            <button className={cx('button', 'hover-default')}>
                                <Link>make up</Link>
                            </button>
                        </div>
                        <div className={cx('item', '')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-2.jpg.webp"></img>
                                </Link>
                            </div>
                            <button className={cx('button', 'hover-default')}>
                                <Link>skincare</Link>
                            </button>
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
        </div>
    );
}

export default TopCategory;
