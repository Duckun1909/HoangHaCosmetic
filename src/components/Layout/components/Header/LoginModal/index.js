import { useState } from 'react';
import Forms from '~/components/Form';
import Modals from '~/components/Modals';
import { LoginModalModules } from '~/CssModules';

const cx = LoginModalModules();

function LoginModal({handleVisible, visible, animation}) {
    const [toggleForm, setToggleForm] = useState('');

    return (
        <Modals animation={animation} handleVisible={handleVisible} visible={visible} >
            <div className={cx('wrapper', 'm-5 text-center')}>
                <div className="overflow-hidden">
                    <div className={cx(toggleForm, 'd-flex')}>
                        <Forms type="login" toggle={setToggleForm} />
                        <Forms type="registers" toggle={setToggleForm} />
                    </div>
                </div>
            </div>
        </Modals>
    );
}

export default LoginModal;
