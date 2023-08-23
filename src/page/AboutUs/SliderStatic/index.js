import { SliderStaticModules } from "~/CssModules";

const cx = SliderStaticModules()

function SliderStatic() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>own</h1>
                <h2>your beauty</h2>
            </div>
        </div>
    );
}

export default SliderStatic;