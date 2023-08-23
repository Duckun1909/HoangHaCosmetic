import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InformationModules } from '~/CssModules';

const cx = InformationModules();

function Information() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('maps', 'd-flex')}>
                    <div className="flex-grow-1"></div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.865266093805!2d105.80896147535549!3d21.03807638061353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1388441675%3A0x686a096178f5183d!2zMzg1IFAuIMSQ4buZaSBD4bqlbiwgVsSpbmggUGjDuiwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1692811845297!5m2!1sen!2s"
                        width="80%"
                        height="845"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={cx('info')}>
                    <div className={cx('info-heading')}>
                        <h3>customer service</h3>
                        <p>Do you have any questions or just want to say hello? <br/> We'd love to hear from you!</p>
                    </div>

                    <div className={cx('info-item')}>
                        <div className={cx('item')}>
                            <div className={cx('sign')}>
                                <FontAwesomeIcon className={'icon'} icon={faLocationDot} />
                            </div>
                            <div className={cx('text')}>
                                <h5>adress</h5>
                                <span>385 ĐỘI CẤN, BA ĐÌNH, HÀ NỘI</span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('sign')}>
                                <FontAwesomeIcon className={'icon'} icon={faPhone} />
                            </div>
                            <div className={cx('text')}>
                                <h5>phone</h5>
                                <span>+84123456789</span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('sign')}>
                                <FontAwesomeIcon className={'icon'} icon={faEnvelope} />
                            </div>
                            <div className={cx('text')}>
                                <h5>email</h5>
                                <span>ducleader2003@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
