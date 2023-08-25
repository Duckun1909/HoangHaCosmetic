import PageTitle from "~/components/PageTitle";
import SideBar from "./SideBar";

function Product() {
    return ( 
        <div>
            <PageTitle currentPage="shop" />
            <div className="container-fluid" style={{maxWidth: "93%"}}>
                <SideBar />
            </div>
        </div>
    );
}

export default Product;