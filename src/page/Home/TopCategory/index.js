import { TopCateModules } from '~/CssModules';
import { Link } from 'react-router-dom';
import kemchongnang from '~/assets/img/chongnangaw/PhotoRoom_20230619_154523.jpg';
import daugoi from '~/assets/img/daugoicapdegate/Dầu gội DEGATE 1.jpg';
import duongtrang from '~/assets/img/duongtrangaw/AW- Dưỡng Trắng 1.jpg';
import suatam from '~/assets/img/suatamdegate/Sữa Tắm DEGATE 1.jpg';
import sptang from '~/assets/img/sptang/Kỳ Ghét 1.jpg';

const cx = TopCateModules();

function TopCategory() {
    return (
        <div className={cx('wrapper', 'wrapper-item')}>
            <div className={cx('title')}>
                <h3>top categories</h3>
            </div>

            <div className="container-flud">
                <div className={cx('content', 'row g-0')}>
                    <div className={cx('item', 'col')}>
                        <div className={cx('img')}>
                            <Link>
                                <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-5.jpg.webp"></img>
                            </Link>
                        </div>
                        <button className={cx('button', 'hover-default')}>
                            <Link>bath & body</Link>
                        </button>
                    </div>
                    <div className={cx('item', 'col')}>
                        <div className={cx('img')}>
                            <Link>
                                <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-4.jpg.webp"></img>
                            </Link>
                        </div>
                        <button className={cx('button', 'hover-default')}>
                            <Link>brushes</Link>
                        </button>
                    </div>
                    <div className={cx('item', 'col')}>
                        <div className={cx('img')}>
                            <Link>
                                <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-3.jpg.webp"></img>
                            </Link>
                        </div>
                        <button className={cx('button', 'hover-default')}>
                            <Link>hair</Link>
                        </button>
                    </div>
                    <div className={cx('item', 'col')}>
                        <div className={cx('img')}>
                            <Link>
                                <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-1.jpg.webp"></img>
                            </Link>
                        </div>
                        <button className={cx('button', 'hover-default')}>
                            <Link>make up</Link>
                        </button>
                    </div>
                    <div className={cx('item', 'col')}>
                        <div className={cx('img')}>
                            <Link>
                                <img src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/01/cate-2.jpg.webp"></img>
                            </Link>
                        </div>
                        <button className={cx('button', 'hover-default')}>
                            <Link>skincare</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopCategory;
