import { Button, Form, Input, Typography } from 'antd';
import Title from 'antd/es/typography/Title';

function AccountDetail() {
    return (
        <div>
            <Form layout="vertical">
                <Form.Item
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
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Typography>
                    <Typography.Title level={3} ellipsis>
                        Password change
                    </Typography.Title>
                </Typography>

                <Form.Item validateStatus='success' label="Current password(leave blank to leave unchanged)" name="current_password">
                    <Input />
                </Form.Item>

                <Form.Item label="New password(leave blank to leave unchanged)" name="new_password">
                    <Input />
                </Form.Item>

                <Form.Item label="Confirm new password" name="confirm_password">
                    <Input status="error"  />
                </Form.Item>

                <Form.Item>
                    <Button size='large' htmlType="submit" type="primary" className="btn-dark btn border-0 fs-4">
                        Save change
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AccountDetail;
