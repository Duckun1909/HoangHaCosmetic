import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageTitleModules } from '~/CssModules';

const cx = PageTitleModules();

function PageTitle({ currentPage }) {
    const pageTitleRef = useRef();
    const img =
        'https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2021/02/breadcumd.jpg.webp';

    useEffect(() => {
        if (currentPage === 'shop') {
            pageTitleRef.current.style.backgroundImage = `url(${img})`;
        }
    });
    return (
        <div className={cx('wrapper')}>
            <div ref={pageTitleRef} className={cx('content', { [currentPage]: true })}>
                <h1 className={cx('title')}>{currentPage}</h1>
                <div className={cx('breadcrumb')}>
                    <Link to="/" className={cx('backPage')}>
                        Home
                    </Link>
                    <span className={cx('delimiter')}>&#62;</span>
                    <span className={cx('currentPage')}>{currentPage}</span>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
