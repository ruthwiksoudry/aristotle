import React, { useEffect, useState } from 'react';
import "./ThirdSection.css";
import KidOutBoxImg from "./assets/sec-6-boy.png";
import SecFiveImg from "./assets/sec-5-outside.png"
import KidInBoxImg from "./assets/sec-5-boy.png";
// import SectionFiveMask from "./assets/sec-5-mask.png"
import HandsImg from "./assets/sec-6-hands.png";
import { _openPlayStore } from './RouteFunction';
import Mask3 from "./assets/mask3.png"



function ThirdSection(props) {
    const [isFourthSec, setIsFourthSec] = useState(false);
    const [isOneImg, setOneImg] = useState(false);
    const [isThridSec, setThirdSec] = useState(false);


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
        targetOne = document.getElementById("bookshelf-img");
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
        targetTwo = document.getElementById("third-section-container");
        if (!target) {
            return;
        }

        const observerTwo = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setThirdSec(true)
                } else {
                    setThirdSec(false)
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
    //         <div className="third-top-half">
    //             <div className="third-top-left-part">
    //                 <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
    //                     <div className="question-forum">FORUM</div>
    //                     <div className="third-heading">
    //                         Nobody around you to answer your doubts and question...
    //                      </div>
    //                     <div className="third-content">
    //                         Feels like walls are closing in on you?
    //                 </div>
    //                 </div>
    //             </div>
    //             <img data-aos-duration="2000" data-aos="fade-up" className="kid-in-box-img" alt="img" src={KidInBoxImg} />
    //             <img data-aos-duration="2000" data-aos="fade-up" className="sec-5-img" alt="img" src={SecFiveImg} />
    //         </div>
    //     )
    // }

    // const renderBottomhalf = () => {
    //     return (
    //         <div className="third-bottom-half">
    //             <div className="third-top-left-part">
    //                 <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
    //                     <div className="question-forum">FORUM</div>
    //                     <div className="third-heading">
    //                         Grab a helping hand from our expert at any hour.
    //                 </div>
    //                     <div className="third-content">
    //                         Ask a question on the forum and get solutions from our subject matter experts
    //                 </div>
    //                     <div onClick={_openPlayStore} className="third-get-app-button">GET THE APP</div>
    //                 </div>
    //             </div>
    //             <div className="third-top-right-part">
    //                 <img data-aos-duration="2000" data-aos="fade-up" className="kid-out-box-img" alt="img" src={KidOutBoxImg} />
    //                 <img data-aos-duration="2000" data-aos="fade-up" className="hand-img" alt="img" src={HandsImg} />
    //             </div>
    //         </div>
    //     )
    // }

    const ThirdSectionText = () => {
        if (isThridSec && !isFourthSec) {
            return !isOneImg ? (
                <div data-aos-duration="2000" className="third-text-section">
                    <div className="question-forum">FORUM</div>
                    <div className="third-heading">
                        Nobody around you to answer your doubts and question...
                         </div>
                    <div className="third-content">
                        Feels like walls are closing in on you?
                    </div>
                </div>
            ) : (
                    <div data-aos-duration="2000" data-aos="fade-up" className="third-text-section">
                        <div className="question-forum">FORUM</div>
                        <div className="third-heading">
                            Grab a helping hand from our expert at any hour.
                    </div>
                        <div className="third-content">
                            Ask a question on the forum and get solutions from our subject matter experts
                    </div>
                        <div onClick={_openPlayStore} className="third-get-app-button">GET THE APP</div>
                    </div>
                )
        }
    }

    return (
        <div className="third-section-container" id="third-section-container">
            <img className="mask3" alt="img" src={Mask3} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="kid-in-box-img" alt="img" src={KidInBoxImg} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="sec-5-img" alt="img" src={SecFiveImg} />
            <img data-aos-duration="2000" data-aos="fade-up" id="kid-out-box-img"
                className="kid-out-box-img" alt="img" src={KidOutBoxImg} />
            {!isOneImg && <img data-aos-duration="2000"
                data-aos="fade-up" className="hand-img" alt="img" src={HandsImg} />}
            {ThirdSectionText()}
            {/* <img className="sec-5-mask-img" alt="img" src={SectionFiveMask} /> */}
            {/* {renderFirsthalf()}
            {renderBottomhalf()} */}
        </div>
    );
}

export default ThirdSection;