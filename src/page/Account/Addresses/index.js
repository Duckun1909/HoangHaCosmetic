import { Link } from 'react-router-dom';

function Addresses() {
    return (
        <div className="container-fluid">
            <p className="fs-4 text-body-secondary mb-5">
                The following addresses will be used on the checkout page by default.
            </p>

            <div className="row">
                <div className="col-6">
                    <h3
                        className="bg-body-secondary p-4 text-justify"
                        style={{
                            fontFamily: 'Cormorant Garamond,serif',
                            letterSpacing: '.7px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        Address 1(default)
                        <Link to="/account/addresses/edit" className="text-decoration-none fs-4 text-success text-hover">Edit</Link>
                    </h3>
                    <ul className="list-group">
                        <li className="list-group-item border-0 fs-5 text-body-secondary">Phạm Huỳnh Đức</li>
                        <li className="list-group-item border-0 fs-5 text-body-secondary">113 định công thượng</li>
                        <li className="list-group-item border-0 fs-5 text-body-secondary">Hà Nội</li>
                        <li className="list-group-item border-0 fs-5 text-body-secondary">Việt Nam</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Addresses;
