import React from 'react';
import "./FourthSection.css";
import SectionSevenMask from "./assets/sec-7-mask.png";
import RunningImg from "./assets/sec-7-boy.png";
import SectionEightImg from "./assets/sec-8-img.png"
import PyramidImg from "./assets/sec-8-asset.png";
import { _openPlayStore } from './RouteFunction';


function FourthSection(props) {

    const renderFirsthalf = () => {
        return (
            <div className="fourth-top-half">
                <img data-aos-duration="2000" data-aos="fade-up" className="running-img" alt="img" src={RunningImg} />
                <div className="fourth-top-right-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="challenges">CHALLENGES</div>
                        <div className="fourth-heading">
                            Running against clock, playing catch up with your friends?
                        </div>
                        <div className="fourth-content">
                            Worried that your results will leave you behind?
                    </div>
                    </div>
                </div>

            </div>
        )
    }

    const renderBottomhalf = () => {
        return (
            <div className="fourth-bottom-half">
                <div className="fourth-top-left-part">
                    <img data-aos-duration="2000" data-aos="fade-up" className="sec-8-img" alt="img" src={SectionEightImg} />
                    <img data-aos-duration="2000" data-aos="fade-up" className="pyramid-img" alt="img" src={PyramidImg} />
                </div>
                <div className="fourth-top-right-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="four-text-wrapper">
                        <div className="challenges">CHALLENGES</div>
                        <div className="fourth-heading">
                            Here's is the nitro boost you need to catch up with your friends!
                    </div>
                        <div className="fourth-content">
                            Challenge them in a quiz and give them a friendly competition
                        </div>
                        <div onClick={_openPlayStore} className="fourth-get-app-button">GET THE APP</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="fourth-section-container">
            <img className="sec-7-mask-img" alt="img" src={SectionSevenMask} />
            {renderFirsthalf()}
            {renderBottomhalf()}
        </div>
    );
}

export default FourthSection;