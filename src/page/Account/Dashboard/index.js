import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <p className="fs-4 text-secondary pb-3">
                Hello ducleader2003 (not ducleader2003?{' '}
                <b style={{ cursor: 'pointer', color: 'var(--black)' }} className="text-hover">
                    Log out
                </b>
                )
            </p>
            <p className="fs-4 text-secondary">
                From your account dashboard you can view your{' '}
                <Link
                    className="text-hover"
                    style={{
                        textDecoration: 'none',
                        color: 'var(--black)',
                        fontWeight: 600,
                    }}
                >
                    recent orders
                </Link>
                , manage your{' '}
                <Link
                    className="text-hover"
                    style={{
                        textDecoration: 'none',
                        color: 'var(--black)',
                        fontWeight: 600,
                    }}
                >
                    shipping and billing addresses
                </Link>
                , and{' '}
                <Link
                    className="text-hover"
                    style={{
                        textDecoration: 'none',
                        color: 'var(--black)',
                        fontWeight: 600,
                    }}
                >
                    edit password account details
                </Link>
            </p>
        </div>
    );
}

export default Dashboard;
