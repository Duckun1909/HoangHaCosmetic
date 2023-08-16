import { Link } from 'react-router-dom';

import { FormModules } from '~/CssModules';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const cx = FormModules();
let schema;

function Forms({ type, toggle }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        reset();
    };

    let formTitle;
    let inputs;
    let Rememberme;
    let buttons;

    if (type === 'login') {
        formTitle = 'Sign in';
        inputs = ['Username', 'Password'];
        Rememberme = () => (
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span>
                    <input className={cx('remember')} type="checkbox" id="remember" />
                    <label className="fs-4 fw-medium" for="remember">
                        Remember me
                    </label>
                </span>
                <span>
                    <Link className={cx('resetLink')} to="/account/retrieval-password">
                        Lost your password?
                    </Link>
                </span>
            </div>
        );
        buttons = [
            {
                title: 'login',
                style: 'button-dark',
                type: 'submit',
            },
            {
                title: 'create an account',
                style: 'button-light',
                type: 'button',
                actions: {
                    handleToggle() {
                        return () => toggle('moveRegister');
                    },
                },
            },
        ];

        schema = yup.object({
            Username: yup.string().required('Username is required!'),
            Password: yup.string().required('Password is required!'),
        });
    }

    if (type === 'registers') {
        formTitle = 'Sign up';
        inputs = ['Fullname', 'Email', 'Phone', 'Username', 'Password'];
        Rememberme = () => <></>;
        buttons = [
            {
                title: 'register',
                style: 'button-dark',
                type: 'submit',
            },
            {
                title: 'already has an account',
                style: 'button-light',
                type: 'button',
                actions: {
                    handleToggle() {
                        return () => toggle('moveLogin');
                    },
                },
            },
        ];

        schema = yup.object({
            Fullname: yup.string().required('Fullname is required!'),
            Email: yup
                .string()
                .required('Email is required!')
                .matches('^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$', 'Email is invalid!'),
            Phone: yup
                .string()
                .required('Phone number is required!')
                .matches(
                    '^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$',
                    'Phone number is invalid!',
                ),
            Username: yup.string().required('Username is required!').min(8, 'Username least contains 8 characters'),
            Password: yup.string().required('Password is required!').min(8, 'Password least contains 8 characters'),
        });
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-header')}>
                <h2 className={cx('title')}>{formTitle}</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form-body')}>
                    <div className={cx('inputs')}>
                        {inputs.map((input, index) => {
                            return (
                                <>
                                    <input
                                        type={input === 'Password' && 'password'}
                                        key={index}
                                        placeholder={input}
                                        className={errors[input] && 'border-danger'}
                                        {...register(`${input}`)}
                                    />
                                    {errors[input] && (
                                        <span className="mt-2 mb-2 fs-5 text-danger">{errors[input].message}</span>
                                    )}
                                </>
                            );
                        })}
                    </div>
                    <Rememberme />
                    <div className={cx('buttons')}>
                        {buttons.map((button, index) => {
                            return (
                                <button
                                    onClick={button.actions?.handleToggle()}
                                    type={button.type}
                                    {...register(`${button.title}`)}
                                    className={cx(button.style, 'hover-default')}
                                    key={index}
                                >
                                    {button.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forms;
