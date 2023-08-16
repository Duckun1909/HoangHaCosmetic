import { TopBrandModules } from '~/CssModules';
import { Link } from 'react-router-dom';

const cx = TopBrandModules();

function TopBrand() {
    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('wrapper', 'wrapper-item')}>
                <div className={cx('title')}>
                    <h3>top categories</h3>
                </div>

                <div className="container-flud">
                    <div className={cx('content', 'row g-0')}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBrand;
