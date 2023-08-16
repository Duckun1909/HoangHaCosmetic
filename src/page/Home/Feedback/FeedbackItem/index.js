import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeedbackItemModules } from '~/CssModules';

import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = FeedbackItemModules();

function FeedbackItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('feedback-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faQuoteLeft} />
                <div className={cx('rating')}>
                    <div className={cx('star-rating')}>
                        <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                        <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                        <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                        <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                        <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                    </div>
                </div>
                <div className={cx('content')}>
                    <p>
                        Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat
                        strep screen violence joints...
                    </p>
                </div>
            </div>

            <div className={cx('feedback-info')}>
                <div className={cx('user-image')}>
                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2020/06/tes-1.jpg.webp" />
                </div>

                <div className={cx('user-name')}>
                    <h4>ann smith</h4>
                </div>
            </div>
        </div>
    );
}

export default FeedbackItem;
