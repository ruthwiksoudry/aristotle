import React from 'react';
import "./FifthSection.css";
import GirlWithPower from "./assets/sec-9-girl.png";
import SectionNineAsset from "./assets/sec-9-asset.png";
import SectionNineMask from "./assets/sec-9-mask.png";
import SectionTenImg from "./assets/sec-10-img.png";
import SectionTenAsset from "./assets/sec-10-asset.png";
import { _openPlayStore } from './RouteFunction';


function FifthSection(props) {

    const renderFirsthalf = () => {
        return (
            <div className="fifth-top-half">
                <div className="fifth-top-left-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="predictive-analysis">Predictive Analysis</div>
                        <div className="fifth-top-heading">
                            Worried about how you will fair in exams...
                    </div>
                        <div className="fifth-top-body">
                            Counting on crystal ball and tarrot cards?
                    </div>
                    </div>
                </div>
                <div className="fifth-top-right-part">
                    <img data-aos-duration="2000" data-aos="fade-up" className="section-nine-img" alt="img" src={GirlWithPower} />
                    <img data-aos-duration="2000" data-aos="fade-up" className="section-9-asset-img" alt="img" src={SectionNineAsset} />
                </div>
            </div>
        )
    }

    const renderBottomhalf = () => {
        return (
            <div className="fifth-bottom-half">
                <div className="fifth-bottom-left-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
                        <div className="predictive-analysis">Predictive Analysis</div>
                        <div className="fifth-bottom-heading">
                            Aristotle can help you see your future success.
                     </div>
                        <div className="fifth-bottom-body">
                            Aristotle can predict how we you'll do in your exam based on
                            how you prepare with us
                    </div>
                        <div onClick={_openPlayStore} className="fifth-get-the-app">
                            GET THE APP
                    </div>
                    </div>
                </div>
                <div className="fifth-bottom-right-part">
                    <img data-aos-duration="2000" data-aos="fade-up" className="phone-two-img" alt="img" src={SectionTenImg} />
                    <img data-aos-duration="2000" data-aos="fade-up" className="sec-10-asset" alt="img" src={SectionTenAsset} />
                </div>
            </div>
        )
    }

    return (
        <div className="fifth-section-container">
            <img className="section-9-mask-img" alt="img" src={SectionNineMask} />
            {renderFirsthalf()}
            {renderBottomhalf()}
        </div>
    );
}

export default FifthSection;