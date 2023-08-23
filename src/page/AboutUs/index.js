import Feedback from '../Home/Feedback';
import ShareMoments from '../Home/ShareMoments';
import Banner from './Banner';
import SliderStatic from './SliderStatic';
import { useEffect, useRef } from 'react';

function AboutUs() {
    return (
        <div>
            <SliderStatic />
            <Banner />
            <Banner contentRight />
            <Feedback typeName="AboutUs" />
            <ShareMoments />
        </div>
    );
}

export default AboutUs;
