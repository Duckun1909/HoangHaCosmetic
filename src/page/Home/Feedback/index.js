import Slider from 'react-slick';
import { FeedbackModules } from '~/CssModules';
import FeedbackItem from './FeedbackItem';

import { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';

const cx = FeedbackModules();

function Feedback({ ref, typeName}) {
    let url = "https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/01/img4-5.jpg"
    const overlayRef = useRef()

    useEffect(() => {
        if(typeName === "Home"){
            overlayRef.current.style.background = `url(${url})`
        }else if(typeName === "AboutUs"){
            overlayRef.current.style.background = "#fff"
        }
    })

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

    let configStyle
    if(typeName === "AboutUs"){
        configStyle = {
            wrapper: {borderBottom: "1px solid #E5E5E5"},
            slider: {color: "var(--grey)", },
            sliderArrow: {color: "var(--black)"}
        }
    }

    return (
        <div style={configStyle?.wrapper} className={cx('wrapper', 'wrapper-item')}>
            <div style={configStyle?.slider} className={cx('list-feedback')}>
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

                <div style={configStyle?.sliderArrow} className={cx('slider-arrows')}>
                    <button onClick={() => sliderRef.current.slickPrev()} className={cx('btn-prev')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                    </button>
                    <button onClick={() => sliderRef.current.slickNext()} className={cx('btn-next')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                    </button>
                </div>
            </div>

            <div ref={overlayRef} className={cx('overlay')}></div>
        </div>
    );
}

export default Feedback;
