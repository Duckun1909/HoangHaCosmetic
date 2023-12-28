import { Form, Input } from 'antd';
import { Button } from 'react-bootstrap';

function TrackingForm() {
    return (
        <div>
            <Form
                style={{
                    maxWidth: '600px',
                    margin: 'auto',
                    marginBottom: "80px"
                }}
                layout="vertical"
            >
                <p className="fs-4 mb-5" style={{ textAlign: 'justify' }}>
                    To track your order please enter your Order ID in the box below and press the "Track" button. This
                    was given to you on your receipt and in the confirmation email you should have received.
                </p>

                <Form.Item
                    label="Order ID"
                    name="order_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Order ID',
                        },
                    ]}
                >
                    <Input
                        className="rounded rounded-0"
                        size="large"
                        placeholder="Found in your order confirmation email"
                    />
                </Form.Item>
                <Form.Item
                    label="Billing email"
                    name="billing_email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Billing Email',
                        },
                    ]}
                >
                    <Input className="rounded rounded-0" size="large" placeholder="Email you used during checkout" />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="hover-default border-0 p-4 rounded rounded-0 fs-4"
                        type="submit"
                        size="large"
                        style={{ width: '100%', textTransform: 'uppercase', backgroundColor: 'var(--black)' }}
                    >
                        track
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default TrackingForm;
