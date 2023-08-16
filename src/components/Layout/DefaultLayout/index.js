import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout({children}) {
    return ( 
        <div className="position-relative">
            <Header />

            <div className="">
                <div className="content">{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;