import { Link } from 'react-router-dom';
import PageTitle from '~/components/PageTitle';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Addresses from './Addresses';
import AddressForm from './Addresses/AddressForm';
import AccountDetail from './AccountDetail';

function Account({ currentRoute }) {
    let View = Dashboard;
    switch (currentRoute) {
        case 'orders':
            View = Orders;
            break;
        case 'addresses':
            View = Addresses;
            break;
        case 'addressesForm':
            View = AddressForm;
            break;
        case 'info':
            View = AccountDetail;
            break;
    }
    return (
        <div className="container">
            <PageTitle currentPage="my account" />
            <div
                className="row"
                style={{
                    padding: '50px 0px',
                }}
            >
                <div className="col-12 col-sm-12 col-md-4 pb-5">
                    <ul className="list-group">
                        <li className="list-group-item bg-body-secondary border-0 rounded-0">
                            <Link
                                to="/account"
                                className="border-bottom p-4 text-hover"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--black)',
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="list-group-item bg-body-secondary border-0 rounded-0">
                            <Link
                                to="/account/orders"
                                className="border-bottom p-4 text-hover"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--black)',
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                Orders
                            </Link>
                        </li>
                        <li className="list-group-item bg-body-secondary border-0 rounded-0">
                            <Link
                                to="/account/addresses"
                                className="border-bottom p-4 text-hover"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--black)',
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                Addresses
                            </Link>
                        </li>
                        <li className="list-group-item bg-body-secondary border-0 rounded-0">
                            <Link
                                to="/account/info"
                                className="border-bottom p-4 text-hover"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--black)',
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                Account details
                            </Link>
                        </li>
                        <li className="list-group-item bg-body-secondary border-0 rounded-0">
                            <Link
                                className="p-4 text-hover"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--black)',
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                Log out
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-sm-12 col-md-8">
                    <View />
                </div>
            </div>
        </div>
    );
}

export default Account;
