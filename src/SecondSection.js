import React from 'react';
import "./SecondSection.css";
import BookshelfImg from "./assets/sec-3-lib.png"
import LightBlueMaskImg from "./assets/sec-3-mask.png"
import GirlSittingImg from "./assets/sec-3-girl.png";
import PhoneImg from "./assets/sec-4-phone.png";
// import CardTwo from "./assets/Section_4-Card2.png";
// import PlantImg from "./assets/Section_4-Plant.png";
import { _openPlayStore } from './RouteFunction';


function SecondSection(props) {

    const renderFirsthalf = () => {
        return (
            <div className="two-top-half">
                <div className="two-top-left-part">
                    <img className="bookshelf-img" alt="img" src={BookshelfImg} />
                </div>
                <div className="two-top-right-part">
                    <div className="two-text-wrapper">
                        <div className="revision">Revisions</div>
                        <div className="two-top-heading">
                            Confused about where to begin to revise for your exams?
                    </div>
                        <div className="two-top-body">
                            Overwhelmed by all the text book and notes you made
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderBottomhalf = () => {
        return (
            <div className="two-bottom-half">
                <div className="two-bottom-left-part">
                    <img className="phone-img" alt="img" src={PhoneImg} />

                    {/* <img className="phone-img" alt="img" src={PhoneImg} /> */}
                    {/* <img className="card-one-img" alt="img" src={CardOne} /> */}
                    {/* <img className="girl-sitting-img" alt="img" src={GirlSittingImg} /> */}
                    {/* <img className="card-two-img" alt="img" src={CardTwo} /> */}
                </div>
                <div className="two-bottom-right-part">
                    <div className="two-text-wrapper">

                        <div className="revision">Revisions</div>
                        <div className="two-bottom-heading">
                            Stay at the top of your game with personalised revisons
                        </div>
                        <div className="two-bottom-body">
                            Improve in just 10-15min with the best learning tools at your finger tips
                        </div>
                        <div className="second-get-the-app" onClick={_openPlayStore}>
                            GET THE APP
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="second-section-container">
            {/* <div className="sec-2-sticky-container"> */}
            <img className="light-blue-mask-img" alt="img" src={LightBlueMaskImg} />
            <img className="girl-sitting-img" alt="img" src={GirlSittingImg} />
            {renderFirsthalf()}
            {renderBottomhalf()}
            {/* </div> */}

        </div >
    );
}

export default SecondSection;