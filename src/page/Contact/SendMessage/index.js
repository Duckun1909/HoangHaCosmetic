import { SendMessageModules } from '~/CssModules';

const cx = SendMessageModules();

function SendMessage() {
    return (
        <div className={cx('wrapper', 'container-fluid')}>
            <div className={cx('content', 'row')}>
                <div className="col"></div>
                <div className={cx('form-data', 'col')}>
                    <h3 className={cx('heading')}>send us a message</h3>

                    <form className={cx('form')}>
                        <div className="row g-0">
                            <input className={cx('form-input', 'col')} name="cus_name" placeholder="Your name" />
                            <input className={cx('form-input', 'col')} name="cus_email" placeholder="Your email" />
                        </div>

                        <textarea className={cx('form-textarea')} name="cus_message" placeholder="Your message..." />
                        <button className={cx('hover-fade')}>send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SendMessage;
