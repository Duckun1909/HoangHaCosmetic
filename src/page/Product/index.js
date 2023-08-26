import PageTitle from '~/components/PageTitle';
import SideBar from './SideBar';
import ListProduct from './ListProduct';

function Product() {
    return (
        <div>
            <PageTitle currentPage="shop" />
            <div className="container-fluid" style={{ maxWidth: '93%' }}>
                <div className='row'>
                    <SideBar />
                    <ListProduct />
                </div>
            </div>
        </div>
    );
}

export default Product;
