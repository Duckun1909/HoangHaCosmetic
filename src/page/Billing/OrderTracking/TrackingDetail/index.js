function TrackingDetail() {
    return (
        <div className="container">
            <p className="fs-4 mb-5 pb-3">
                Order #19117 was placed on November 22, 2023 and is currently Pending payment.
            </p>

            <div className="mb-5 pb-5">
                <h1>Order details</h1>
                <table className="border w-100">
                    <thead>
                        <tr>
                            <th className="p-4 fs-4 fw-medium text-uppercase">product</th>
                            <th className="p-4 fs-4 fw-medium text-uppercase">total</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="p-4 border fs-4 text-body-secondary text-capitalize">
                                Avocado Redness Correcting × 1
                            </td>
                            <td className="p-4 border fs-4 text-body-secondary">$90.00</td>
                        </tr>

                        <tr>
                            <td className="p-4 border fs-4 text-body-secondary text-capitalize fw-medium">subtotal:</td>
                            <td className="p-4 border fs-4 text-body-secondary">$90.00</td>
                        </tr>

                        <tr>
                            <td className="p-4 border fs-4 text-body-secondary text-capitalize fw-medium">shipping:</td>
                            <td className="p-4 border fs-4 text-body-secondary">Free shipping</td>
                        </tr>

                        <tr>
                            <td className="p-4 border fs-4 text-body-secondary text-capitalize fw-medium">
                                Payment method:
                            </td>
                            <td className="p-4 border fs-4 text-body-secondary">PayPal</td>
                        </tr>

                        <tr>
                            <td className="p-4 border fs-4 text-body-secondary text-capitalize fw-medium">total:</td>
                            <td className="p-4 border fs-4 text-body-secondary">$90.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row mb-5 pb-5">
                <h3>Shipping address</h3>
                <div style={{width: "fit-content"}}>
                    <ul className="list-group p-3" style={{ border: '2px dashed #ccc' }}>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">Phạm Huỳnh Đức</li>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">150 luong dinh cua</li>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">Ha noi</li>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">Vietnam</li>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">0923192369</li>
                        <li className="list-group-item border-0 fs-4 text-body-secondary">ducleader2003@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TrackingDetail;
