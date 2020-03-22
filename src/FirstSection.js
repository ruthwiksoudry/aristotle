import React, { useEffect, useState } from 'react';
import "./FirstSection.css";
import SectionOneImg from "./assets/sec-1.png"
import { _openPlayStore, NotMobile, Mobile } from './HelperFunctions';
import SectonTwoBoyImg from "./assets/sec-2-boy.png";
import Mask1 from "./assets/mask1.png";
import Mask1Mob from "./assets/mob-mask1.png"

function FirstSection(props) {
    const [isOneImg, setOneImg] = useState(false);
    const { isFirstSec, isSecondSec } = props;

    useEffect(() => {
        let targetOne;
        targetOne = document.getElementById("section-1-img");
        if (!targetOne) {
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
    }, []);

    const clicKHandler = () => {
        const ele = document.getElementById("section-2-img")
        ele && ele.scrollIntoView()
    }

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
                        <div className="instant-search">In the dark about how to your exam?</div>
                        <div className="smart-search">
                            We've have all been there...Explore the aristotle app to find out how
                         </div>
                        <div onClick={clicKHandler} className="find-out-how">
                            <div>EXPLORE</div>
                        </div>
                    </div>
                )
        }
    }

    const OneFirstHalfTextMob = () => {
        if (isFirstSec && !isSecondSec) {
            return !isOneImg ? (
                <div data-aos-duration="2000" data-aos="fade-up"
                    className="one-top-left-part-mob">
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
                    <div data-aos-duration="2000" data-aos="fade-up"
                        className="one-top-left-part-mob">
                        <div className="instant-search">In the dark about how to your exam?</div>
                        <div className="smart-search">
                            We've have all been there...Explore the aristotle app to find out how
                         </div>
                        <div onClick={clicKHandler} className="find-out-how">
                            <div>EXPLORE</div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <>
            <NotMobile>
                <div id="first-section-container"
                    className={isOneImg ? "first-section-container" :
                        "change-color"} >
                    <img className="mask1" alt="img"
                        src={Mask1} />
                    <img id="section-1-img" className="section-1-img" alt="img"
                        src={SectionOneImg} />
                    <img id="section-2-img" className="section-2-img" alt="img"
                        src={SectonTwoBoyImg} />
                    {OneFirstHalfText()}
                </ div>
            </NotMobile>
            <Mobile>
                <div id="first-section-container"
                    className={isOneImg ? "first-section-container" :
                        "change-color"}>
                    <img alt="img" className="mask1-mob" src={Mask1Mob} />
                    <img id="section-1-img" className="section-1-img-mob" alt="img"
                        src={SectionOneImg} />
                    <img id="section-2-img" className="section-2-img-mob" alt="img"
                        src={SectonTwoBoyImg} />
                    {OneFirstHalfTextMob()}
                </div>
            </Mobile>
        </>
    );
}

export default FirstSection;