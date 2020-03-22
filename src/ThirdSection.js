import React, { useEffect, useState } from 'react';
import "./ThirdSection.css";
import KidOutBoxImg from "./assets/sec-6-boy.png";
import SecFiveImg from "./assets/sec-5-outside.png"
import KidInBoxImg from "./assets/sec-5-boy.png";
import HandsImg from "./assets/sec-6-hands.png";
import { _openPlayStore, NotMobile, Mobile } from './HelperFunctions';
import Mask3 from "./assets/mask3.png"
import Mask3Mob from "./assets/mob-mask3.png"



function ThirdSection(props) {
    const [isOneImg, setOneImg] = useState(false);
    const { isSecondSec, isThirdSec, isFourthSec } = props;


    useEffect(() => {
        let targetOne;
        targetOne = document.getElementById("kid-in-box-img");
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

    const ThirdSectionText = () => {
        if (isThirdSec && !isFourthSec && !isSecondSec) {
            console.log()
            return isOneImg ? (
                <div data-aos="fade-up" className="third-text-section">
                    <div className="question-forum">FORUM</div>
                    <div className="third-heading">
                        Nobody around you to answer your doubts and question...
                         </div>
                    <div className="third-content">
                        Feels like walls are closing in
                         on you?
                    </div>
                </div>
            ) : (
                    <div className="third-text-section">
                        <div className="question-forum">FORUM</div>
                        <div className="third-heading">
                            Grab a helping hand from our expert at any hour.
                    </div>
                        <div className="third-content">
                            Ask a question on the forum and get solutions from our subject matter experts
                    </div>
                        <div onClick={_openPlayStore} className="third-3-get-app-button">GET THE APP</div>
                    </div>
                )
        }
    }

    const ThirdSectionTextMobile = () => {
        if (isThirdSec && !isFourthSec && !isSecondSec) {
            console.log()
            return isOneImg ? (
                <div data-aos="fade-up" className="third-text-section-mob">
                    <div className="question-forum">FORUM</div>
                    <div className="third-heading">
                        Nobody around you to answer your doubts and question...
                         </div>
                    <div className="third-content">
                        Feels like walls are closing in
                         on you?
                    </div>
                </div>
            ) : (
                    <div className="third-text-section-mob">
                        <div className="question-forum">FORUM</div>
                        <div className="third-heading">
                            Grab a helping hand from our expert at any hour.
                    </div>
                        <div className="third-content">
                            Ask a question on the forum and get solutions from our subject matter experts
                    </div>
                        <div onClick={_openPlayStore} className="third-3-get-app-button">GET THE APP</div>
                    </div>
                )
        }
    }

    return (
        <>
            <NotMobile>
                <div className="third-section-container" id="third-section-container">
                    <img className="mask3" alt="img" src={Mask3} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="kid-in-box-img"
                        className="kid-in-box-img" alt="img" src={KidInBoxImg} />
                    <img data-aos-duration="4000" data-aos="fade-up"
                        className="sec-5-img" alt="img" src={SecFiveImg} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="kid-out-box-img"
                        className="kid-out-box-img" alt="img" src={KidOutBoxImg} />
                    {!isOneImg && <img data-aos-duration="2000"
                        data-aos="fade-up" className="hand-img" alt="img" src={HandsImg} />}
                    {ThirdSectionText()}
                </div>
            </NotMobile>
            <Mobile>
                <div className="third-section-container" id="third-section-container">
                    <img className="mask3-mob" alt="img" src={Mask3Mob} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="kid-in-box-img"
                        className="kid-in-box-img-mob" alt="img" src={KidInBoxImg} />
                    <img data-aos-duration="4000" data-aos="fade-up"
                        className="sec-5-img-mob" alt="img" src={SecFiveImg} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="kid-out-box-img"
                        className="kid-out-box-img-mob" alt="img" src={KidOutBoxImg} />
                    {!isOneImg && <img data-aos-duration="2000"
                        data-aos="fade-up" className="hand-img-mob" alt="img" src={HandsImg} />}
                </div>
                {ThirdSectionTextMobile()}
            </Mobile>
        </>


    );
}

export default ThirdSection;