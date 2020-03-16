import React, { useEffect, useState } from 'react';
import "./FourthSection.css";
import Mask4 from "./assets/mask4.png";

// import SectionSevenMask from "./assets/sec-7-mask.png";
import RunningImg from "./assets/sec-7-boy.png";
import SectionEightImg from "./assets/sec-8-img.png"
import PyramidImg from "./assets/sec-8-asset.png";
import { _openPlayStore } from './RouteFunction';


function FourthSection(props) {
    const [isFourthSec, setIsFourthSec] = useState(false);
    const [isOneImg, setOneImg] = useState(false);
    const [isfifthSec, setIsfifthSec] = useState(false);

    useEffect(() => {
        let target;
        target = document.getElementById("fourth-section-container");
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsFourthSec(true)
                } else {
                    setIsFourthSec(false)
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(target);

        let targetOne;
        targetOne = document.getElementById("running-img");
        if (!target) {
            return;
        }

        const observerOne = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setOneImg(true)
                } else {
                    setOneImg(false)
                }
            },
            {
                threshold: 0.1
            }
        );
        observerOne.observe(targetOne);

        //========
        // let targetTwo;
        // targetTwo = document.getElementById("fifth-section-container");
        // if (!target) {
        //     return;
        // }

        // const observerTwo = new IntersectionObserver(
        //     entries => {
        //         if (entries[0].isIntersecting) {
        //             setIsfifthSec(true)
        //         } else {
        //             setIsfifthSec(false)
        //         }
        //     },
        //     {
        //         threshold: 0.1
        //     }
        // );
        // observerTwo.observe(targetTwo);
    }, []);

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

    const fourthSectionContainer = () => {
        if (isFourthSec && !isfifthSec) {
            return !isOneImg ? (
                <div data-aos-duration="2000" className="second-text-section">
                    <div className="challenges">CHALLENGES</div>
                    <div className="fourth-heading">
                        Running against clock, playing catch up with your friends?
                        </div>
                    <div className="fourth-content">
                        Worried that your results will leave you behind?
                    </div>
                </div>
            ) : (
                    <div data-aos-duration="2000" data-aos="fade-up" className="second-text-section">
                        <div className="challenges">CHALLENGES</div>
                        <div className="fourth-heading">
                            Here's is the nitro boost you need to catch up with your friends!
                    </div>
                        <div className="fourth-content">
                            Challenge them in a quiz and give them a friendly competition
                        </div>
                        <div onClick={_openPlayStore} className="fourth-get-app-button">GET THE APP</div>
                    </div>
                )
        }
    }

    return (
        <div id="fourth-section-container" className="fourth-section-container">
            <img className="mask4" alt="img" src={Mask4} />
            <img data-aos-duration="2000" data-aos="fade-up" id="running-img"
                className="running-img" alt="img" src={RunningImg} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="sec-8-img" alt="img" src={SectionEightImg} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="pyramid-img" alt="img" src={PyramidImg} />
            {fourthSectionContainer()}
            {/* <img className="sec-7-mask-img" alt="img" src={SectionSevenMask} /> */}
            {/* {renderFirsthalf()}
            {renderBottomhalf()} */}
        </div>
    );
}

export default FourthSection;