import { SlidersModules } from '~/CssModules';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const cx = SlidersModules();

function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        swipeToSlide: true,
        fade: true,
    };

    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <Slider {...settings}>
                <div className={cx('item')}>
                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/02/slider4-1.jpg" />
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>beauty offer</h1>
                        <h3 className={cx('sub-title')}>cerla premiem</h3>
                        <button className={cx('btn-shop', 'hover-fade-white')}>
                            <Link to="/products">shop collection</Link>
                        </button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/02/slider4-3.jpg" />
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>travel series</h1>
                        <h3 className={cx('sub-title')}>cerla premiem</h3>
                        <button className={cx('btn-shop', 'hover-fade-white')}>
                            <Link to="/products">shop collection</Link>
                        </button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/02/slider4-4.jpg" />
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>mixing palette </h1>
                        <h3 className={cx('sub-title')}>cerla premiem</h3>
                        <button className={cx('btn-shop', 'hover-fade-white')}>
                            <Link to="/products">shop collection</Link>
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Sliders;
