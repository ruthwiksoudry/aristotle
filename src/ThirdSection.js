import React from 'react';
import "./ThirdSection.css";
import KidOutBoxImg from "./assets/sec-6-boy.png";
import SecFiveImg from "./assets/sec-5-outside.png"
import KidInBoxImg from "./assets/sec-5-boy.png";
import SectionFiveMask from "./assets/sec-5-mask.png"
import HandsImg from "./assets/sec-6-hands.png";
import { _openPlayStore } from './RouteFunction';


function ThirdSection(props) {

    const renderFirsthalf = () => {
        return (
            <div className="third-top-half">
                <div className="third-top-left-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="question-forum">FORUM</div>
                        <div className="third-heading">
                            Nobody around you to answer your doubts and question...
                         </div>
                        <div className="third-content">
                            Feels like walls are closing in on you?
                    </div>
                    </div>
                </div>
                <img data-aos-duration="2000" data-aos="fade-up" className="kid-in-box-img" alt="img" src={KidInBoxImg} />
                <img data-aos-duration="2000" data-aos="fade-up" className="sec-5-img" alt="img" src={SecFiveImg} />
            </div>
        )
    }

    const renderBottomhalf = () => {
        return (
            <div className="third-bottom-half">
                <div className="third-top-left-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="question-forum">FORUM</div>
                        <div className="third-heading">
                            Grab a helping hand from our expert at any hour.
                    </div>
                        <div className="third-content">
                            Ask a question on the forum and get solutions from our subject matter experts
                    </div>
                        <div onClick={_openPlayStore} className="third-get-app-button">GET THE APP</div>
                    </div>
                </div>
                <div className="third-top-right-part">
                    <img data-aos-duration="2000" data-aos="fade-up" className="kid-out-box-img" alt="img" src={KidOutBoxImg} />
                    <img data-aos-duration="2000" data-aos="fade-up" className="hand-img" alt="img" src={HandsImg} />
                </div>
            </div>
        )
    }

    return (
        <div className="third-section-container">
            <img className="sec-5-mask-img" alt="img" src={SectionFiveMask} />
            {renderFirsthalf()}
            {renderBottomhalf()}
        </div>
    );
}

export default ThirdSection;