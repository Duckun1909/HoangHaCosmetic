import { Button, Form, Input } from 'antd';

function AddressForm() {
    return (
        <div className="container-fluid">
            <h3>Edit address</h3>
            <Form name="edit-form" autoComplete="off" className="row" layout="vertical" method="post">
                <Form.Item
                    className="col-6"
                    label="Fullname"
                    name="fullname"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your fullname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="col-6"
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                        },
                        {
                            pattern: '^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$',
                            message: 'Email entered not valid!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="col-6"
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="col-6"
                    label="Street address"
                    name="shipping-address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input street address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className="col-6">
                    <Button htmlType="submit" type="primary" className="btn-dark btn border-0 fs-4">
                        Save change
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddressForm;
