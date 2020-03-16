import React, { useEffect, useState } from 'react';
import "./FirstSection.css";
// import MagnetImg from "./assets/sec-2-magnet.png"
import SectionOneImg from "./assets/sec-1.png"
import { _openPlayStore } from './RouteFunction';
// import BlueOneImg from "./assets/sec-1-blue-mask.png";
import SectonTwoBoyImg from "./assets/sec-2-boy.png";
import OuterMask from "./assets/complete-white-mask.png";



function FirstSection(props) {

    const [isSecondSec, setIsSecondSec] = useState(false);
    const [isOneImg, setOneImg] = useState(false);
    const [isFirstSec, setFirstSec] = useState(false);

    useEffect(() => {
        let target;
        target = document.getElementById("second-section-container");
        if (!target) {
            return;
        }
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsSecondSec(true)
                } else {
                    setIsSecondSec(false)
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(target);

        //-----------
        let targetOne;
        targetOne = document.getElementById("section-1-img");
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
        let targetTwo;
        targetTwo = document.getElementById("first-section-container");
        if (!target) {
            return;
        }

        const observerTwo = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setFirstSec(true)
                } else {
                    setFirstSec(false)
                }
            },
            {
                threshold: 0.1
            }
        );
        observerTwo.observe(targetTwo);
    }, []);


    // const renderFirsthalf = () => {
    //     return (
    //         <div className="one-top-half">
    //             <div data-aos-duration="2000" data-aos="fade-up" className="one-top-left-part">
    //                 <div className="one-heading">In the dark about how to your exam?</div>
    //                 <div className="one-content">
    //                     <span>We've have all been there...</span>
    //                 </div>
    //                 <div className="find-out-how">FIND OUT HOW</div>
    //             </div>

    //         </div>
    //     )
    // }

    // const renderBottomhalf = () => {
    //     return (
    //         <div className="one-bottom-half">
    //             <div className="one-bottom-left-part">
    //                 <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
    //                     <div className="smart-search">SMART SEARCH</div>
    //                     <div className="instant-search">
    //                         Shed some light with our instant search
    //                     </div>
    //                     <div className="try-it">
    //                         Scan any question from your  textbook for step-by-step solutions
    //                     </div>
    //                     <div onClick={_openPlayStore} className="get-app-button">
    //                         GET THE APP
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    const OneFirstHalfText = () => {
        if (isFirstSec && !isSecondSec) {
            return !isOneImg ? (
                <div data-aos-duration="2000" data-aos="fade-up"
                    className="one-top-left-part">
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
            ) : (
                    <div data-aos-duration="2000" data-aos="fade-up" className="one-top-left-part">
                        <div className="smart-search">In the dark about how to your exam</div>
                        <div className="instant-search">
                            We've have all been there
                         </div>
                        <div className="find-out-how">FIND OUT HOW</div>
                    </div>
                )
        }
    }

    return (
        <div id="first-section-container"
            className={isOneImg ? "first-section-container" :
                "change-color"} >
            <img className="mask1" alt="img"
                src={OuterMask} />
            <img id="section-1-img" className="section-1-img" alt="img"
                src={SectionOneImg} />
            <img id="section-2-img" className="section-2-img" alt="img"
                src={SectonTwoBoyImg} />
            {OneFirstHalfText()}
            {/* {OneSecondHalfText()} */}
            {/* <img className="section-two-boy-img"
                alt="img" src={SectonTwoBoyImg} />
            <img alt="magnet-img" className="magnet-img" src={MagnetImg} /> */}
            {/* <img className="blue-mask-img" alt="img" src={BlueOneImg} />
            <img className="outer-mask-img" alt="img" src={OuterMask} />
            {renderFirsthalf()}
            {renderBottomhalf()} */}
        </ div>
    );
}

export default FirstSection;