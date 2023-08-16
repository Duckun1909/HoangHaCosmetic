import { SubmenuModules } from '~/CssModules';
import { Link } from 'react-router-dom';

const cx = SubmenuModules();

function SubMenu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <div className={cx('item')}>
                    <h2 className={cx('title')}>shop style</h2>

                    <ul className={cx('list', 'list-group')}>
                        <li className="list-group-item border-0">
                            <Link className='text-decoration-none'>Nuoc hoa nam cao cap</Link>
                        </li>
                        <li className="list-group-item border-0">
                            <Link className='text-decoration-none'>Nuoc hoa nam cao cap</Link>
                        </li>
                        <li className="list-group-item border-0">
                            <Link className='text-decoration-none'>Nuoc hoa nam cao cap</Link>
                        </li>
                        <li className="list-group-item border-0">
                            <Link className='text-decoration-none'>Nuoc hoa nam cao cap</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubMenu;
