import { TopBrandModules } from '~/CssModules';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const cx = TopBrandModules();

function TopBrand() {
    //config slick slider
    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('wrapper', 'wrapper-item')}>
                <div className={cx('title')}>
                    <h3>top brands</h3>
                </div>

                <div className="container-flud">
                    <div className={cx('content', 'row g-0')}>
                        <Slider {...config}>
                            <div className={cx('item', 'col border-1 border')}>
                                <div className={cx('img')}>
                                    <Link>
                                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/brand-1.jpg.webp"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('item', 'col border-1 border')}>
                                <div className={cx('img')}>
                                    <Link>
                                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/brand-2.jpg.webp"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('item', 'col border-1 border')}>
                                <div className={cx('img')}>
                                    <Link>
                                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/brand-3.jpg.webp"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('item', 'col border-1 border')}>
                                <div className={cx('img')}>
                                    <Link>
                                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/brand-4.jpg.webp"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('item', 'col border-1 border')}>
                                <div className={cx('img')}>
                                    <Link>
                                        <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/brand-5.jpg.webp"></img>
                                    </Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBrand;
