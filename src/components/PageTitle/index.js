import { Link } from "react-router-dom";
import { PageTitleModules } from "~/CssModules";

const cx = PageTitleModules()

function PageTitle({currentPage}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('title')}>contact</h1>
                <div className={cx('breadcrumb')}>
                    <Link to="/" className={cx('backPage')}>Home</Link>
                    <span className={cx('delimiter')}>&#62;</span>
                    <span className={cx('currentPage')}>{currentPage}</span>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;