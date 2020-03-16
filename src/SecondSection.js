import React, { useEffect, useState } from 'react';
import "./SecondSection.css";
import BookshelfImg from "./assets/sec-3-lib.png"
// import LightBlueMaskImg from "./assets/sec-3-mask.png"
import GirlSittingImg from "./assets/sec-3-girl.png";
import PhoneImg from "./assets/sec-4-phone.png";
import Mask2 from "./assets/mask2.png"
// import CardTwo from "./assets/Section_4-Card2.png";
// import PlantImg from "./assets/Section_4-Plant.png";
import { _openPlayStore } from './RouteFunction';


function SecondSection(props) {
    const [isSecondSec, setIsSecondSec] = useState(false);
    const [isOneImg, setOneImg] = useState(false);
    const [isThridSec, setThirdSec] = useState(false);


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
    //         <div className="two-top-half">
    //             <div className="two-top-left-part">
    //                 <img data-aos-duration="2000" data-aos="fade-up" className="bookshelf-img" alt="img" src={BookshelfImg} />
    //             </div>
    //             <div data-aos-duration="2000" data-aos="fade-up" className="two-top-right-part">
    //                 <div data-aos-duration="2000" className="two-text-wrapper">
    //                     <div className="revision">Revisions</div>
    //                     <div className="two-top-heading">
    //                         Confused about where to begin to revise for your exams?
    //                 </div>
    //                     <div id="text-div" className="two-top-body">
    //                         Overwhelmed by all the text book and notes you made
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // const renderBottomhalf = () => {
    //     return (
    //         <div className="two-bottom-half">
    //             <div className="two-bottom-left-part">
    //                 <img data-aos-duration="2000" data-aos="fade-up" className="phone-img" alt="img" src={PhoneImg} />
    //             </div>
    //             <div data-aos="fade-up" className="two-bottom-right-part">
    //                 <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
    //                     <div className="revision">Revisions</div>
    //                     <div className="two-bottom-heading">
    //                         Stay at the top of your game with personalised revisons
    //                     </div>
    //                     <div className="two-bottom-body">
    //                         Improve in just 10-15min with the best learning tools at your finger tips
    //                     </div>
    //                     <div className="second-get-the-app" onClick={_openPlayStore}>
    //                         GET THE APP
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    const secondSectionText = () => {
        if (isSecondSec && !isThridSec) {
            return !isOneImg ? (
                <div data-aos-duration="2000" className="second-text-section">
                    <div className="revision">Revisions</div>
                    <div className="two-top-heading">
                        Confused about where to begin to revise for your exams?
                    </div>
                    <div id="text-div" className="two-top-body">
                        Overwhelmed by all the text book and notes you made
                    </div>
                </div>
            ) : (
                    <div data-aos-duration="2000" data-aos="fade-up" className="second-text-section">
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
                )
        }
    }

    return (
        <div id="second-section-container" className="second-section-container">
            <img className="mask2" alt="img" src={Mask2} />
            {isSecondSec && !isThridSec && <img data-aos="fade-up"
                className={isSecondSec ? "girl-sitting-img" : "girl-sitting-absolute"} alt="img" src={GirlSittingImg} />}
            <img data-aos-duration="2000" data-aos="fade-up" id="bookshelf-img"
                className="bookshelf-img" alt="img" src={BookshelfImg} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="phone-img" alt="img" src={PhoneImg} />
            {secondSectionText()}
            {/* <img className="light-blue-mask-img" alt="img" src={LightBlueMaskImg} /> */}
            {/* {renderFirsthalf()}
            {renderBottomhalf()} */}
        </div >
    );
}

export default SecondSection;