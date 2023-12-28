import { Link } from 'react-router-dom';
import { BannerAbuModules } from '~/CssModules';

const cx = BannerAbuModules();

function Banner({ contentRight }) {
    let configContent;
    if (contentRight) {
        configContent = {
            content: {
                backgroundImage: "url(https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/01/about-3.jpg)",
            },
        };
    }

    return (
        <div className={cx('wrapper')}>
            <div style={configContent?.content} className={cx('content', {'contentRight': contentRight})}>
                <div className={cx('text-content')}>
                    <h5 className={cx('title')}>LOOK GOOD & FEEL GOOD</h5>
                    <h2 className={cx('heading')}>
                        CERLA IS FOR EVERY EYE, <br /> LIP AND FACE
                    </h2>
                    <p className={cx('desc')}>
                        Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse
                        platea dictumst. Praesent nec nisl a purus blandit viverra
                    </p>
                    <button className={cx('hover-fade')}>
                        <Link>learn more</Link>
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Banner;
