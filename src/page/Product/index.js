import PageTitle from '~/components/PageTitle';
import SideBar from './SideBar';
import ListProduct from './ListProduct';
import { useState } from 'react';

function Product() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            <PageTitle currentPage="shop" />
            <div className="container-fluid" style={{ maxWidth: '93%' }}>
                <div className="row">
                    <SideBar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
                    <ListProduct setShowSidebar={setShowSidebar} />
                </div>
            </div>
        </div>
    );
}

export default Product;
