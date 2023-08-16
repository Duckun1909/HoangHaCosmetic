import { ShareMomentModules } from '~/CssModules';

import { Link } from 'react-router-dom';

const cx = ShareMomentModules();

function ShareMoments() {
    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('title')}>
                <div className={cx('title-image')}>
                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/uploads/2021/01/img4-6.png" />
                </div>
                <div className={cx('title-heading1', {'title-heading':true})}>
                    <h3>share your beauty</h3>
                </div>
                <div className={cx('title-heading2', {'title-heading':true})}>
                    <h2>moments</h2>
                </div>
            </div>

            <div className={cx('list')}>
                <div className="container-flud">
                    <div className={cx('content', 'row g-0')}>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/1.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/2.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/3.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/4.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/5.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item', 'col')}>
                            <div className={cx('img')}>
                                <Link>
                                    <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/6.jpg.webp"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareMoments;
