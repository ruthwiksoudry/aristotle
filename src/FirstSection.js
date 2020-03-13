import React from 'react';
import "./FirstSection.css";
import MagnetImg from "./assets/sec-2-magnet.png"
import SectionOneImg from "./assets/sec-1.png"
import { _openPlayStore } from './RouteFunction';
import BlueOneImg from "./assets/sec-1-blue-mask.png";
import SectonTwoBoyImg from "./assets/sec-2-img.png";
import OuterMask from "./assets/sec-1-outermask.png";



function FirstSection(props) {
    const renderFirsthalf = () => {
        return (
            <div className="one-top-half">
                <div data-aos-duration="2000" data-aos="fade-up" className="one-top-left-part">
                    <div className="one-heading">In the dark about how to your exam?</div>
                    <div className="one-content">
                        <span>We've have all been there...</span>
                    </div>
                    <div className="find-out-how">FIND OUT HOW</div>
                </div>

            </div>
        )
    }

    const renderBottomhalf = () => {
        return (
            <div className="one-bottom-half">
                <div className="one-bottom-left-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="smart-search">SMART SEARCH</div>
                        <div className="instant-search">
                            Shed some light with our instant search
                        </div>
                        <div className="try-it">
                            Scan any question from your  textbook for step-by-step solutions
                        </div>
                        <div onClick={_openPlayStore} className="get-app-button">
                            GET THE APP
                        </div>
                    </div>
                </div>
                <img className="section-two-boy-img" data-aos-duration="2000"
                    data-aos="fade-up" alt="img" src={SectonTwoBoyImg} />
                <img alt="magnet-img" className="magnet-img" src={MagnetImg} />
            </div>
        )
    }

    return (
        <div className="first-section-container">
            <img className="blue-mask-img" alt="img" src={BlueOneImg} />
            <img className="outer-mask-img" alt="img" src={OuterMask} />
            <img className="section-one-img" alt="img" data-aos="fade-up"
                src={SectionOneImg} />
            {renderFirsthalf()}
            {renderBottomhalf()}
        </div>
    );
}

export default FirstSection;