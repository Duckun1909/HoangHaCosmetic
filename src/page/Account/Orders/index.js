import { Link } from 'react-router-dom';

function Orders() {
    return (
        <div>
            <table className="table table-hover">
                <thead className='border'>
                    <th className="fs-4 p-3 fw-medium text-uppercase">order</th>
                    <th className="fs-4 p-3 fw-medium text-uppercase">date</th>
                    <th className="fs-4 p-3 fw-medium text-uppercase">status</th>
                    <th className="fs-4 p-3 fw-medium text-uppercase">total</th>
                    <th className="fs-4 p-3 fw-medium text-uppercase">actions</th>
                </thead>

                <tbody>
                    <tr className="fs-5">
                        <td className="p-3 border">#19116</td>
                        <td className="p-3 text-secondary border">November 14, 2023</td>
                        <td className="p-3 text-secondary border">On hold</td>
                        <td className="p-3 text-secondary border">$495.00 for 3 items</td>
                        <td className="p-3 border">
                            <Link to="/order-tracking">View</Link>
                        </td>
                    </tr>   
                    <tr className="fs-5">
                        <td className="p-3 border">#19117</td>
                        <td className="p-3 text-secondary border">November 22, 2023</td>
                        <td className="p-3 text-secondary border">Pending payment</td>
                        <td className="p-3 text-secondary border">$90.00 for 1 item</td>
                        <td className="p-3 border">
                            <Link className='d-block'>Pay</Link>
                            <Link className='d-block ' to="/order-tracking">View</Link>
                            <Link className='d-block'>Cancel</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
