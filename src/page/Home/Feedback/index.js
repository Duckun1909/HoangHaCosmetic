import Slider from 'react-slick';
import { FeedbackModules } from '~/CssModules';
import FeedbackItem from './FeedbackItem';

import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = FeedbackModules();

function Feedback() {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        swipeToSlider: true,
        swipe: true,
        arrows: false,
    };

    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('list-feedback')}>
                <Slider ref={sliderRef} {...settings}>
                    <div className={cx('item')}>
                        <FeedbackItem />
                    </div>
                    <div className={cx('item')}>
                        <FeedbackItem />
                    </div>
                    <div className={cx('item')}>
                        <FeedbackItem />
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
            <div className={cx('overlay')}></div>
        </div>
    );
}

export default Feedback;
