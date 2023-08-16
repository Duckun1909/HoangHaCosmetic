import Banner from "./Banner";
import Feedback from "./Feedback";
import ShareMoments from "./ShareMoments";
import Sliders from "./Sliders";
import TopBrand from "./TopBrand";
import TopCategory from "./TopCategory";
import TrendingProducts from "./TrendingProducts";

function Home() {
    return ( 
        <div>
            <Sliders />
            <TopCategory />
            <Banner />
            <TrendingProducts />
            <Feedback />
            <TopBrand />
            <ShareMoments />
        </div>
     );
}

export default Home;