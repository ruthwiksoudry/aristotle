import React, { useEffect, useState } from 'react';
import "./SecondSection.css";
import BookshelfImg from "./assets/sec-3-lib.png"
import GirlSittingImg from "./assets/sec-3-girl.png";
import PhoneImg from "./assets/sec-4-phone.png";
import Mask2 from "./assets/mask2.png"
import { _openPlayStore, NotMobile, Mobile } from './HelperFunctions';
import Mask2Mob from "./assets/mob-mask2.png"



function SecondSection(props) {
    const [isOneImg, setOneImg] = useState(false);
    const { isFirstSec, isSecondSec, isThirdSec } = props;


    useEffect(() => {
        let targetOne;
        targetOne = document.getElementById("bookshelf-img");
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

    const secondSectionText = () => {
        if (isSecondSec && !isThirdSec && !isFirstSec) {
            return isOneImg ? (
                <div data-aos="fade-up" className="second-text-section">
                    <div className="revision">Revisions</div>
                    <div className="two-top-heading">
                        Confused about where to begin to revise for your exams?
                    </div>
                    <div id="text-div" className="two-top-body">
                        Overwhelmed by all the text book and notes you made
                    </div>
                </div>
            ) : (
                    <div data-aos={!isOneImg ? "fade-up" : ""} className="second-text-section">
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

    const secondSectionTextMob = () => {
        if (isSecondSec && !isFirstSec) {
            return isOneImg ? (
                <div className="second-text-section-mob">
                    <div className="revision-mob">Revisions</div>
                    <div className="two-top-heading-mob">
                        Confused about where to begin to revise for your exams?
                    </div>
                    <div id="text-div" className="two-top-body">
                        Overwhelmed by all the text book and notes you made
                    </div>
                </div>
            ) : (
                    <div className="position-sticky-two">
                        <div className="revision-mob">Revisions</div>
                        <div className="two-bottom-heading-mob">
                            Stay at the top of your game with personalised revisons
                          </div>
                        <div className="two-bottom-body">
                            Improve in just 10-15min with the best learning tools at your finger tips
                         </div>
                        <div className="second-get-the-app-mob" onClick={_openPlayStore}>
                            GET THE APP
                        </div>
                    </div>
                )
        }
    }

    return (
        <>
            <NotMobile>
                <div id="second-section-container" className="second-section-container">
                    <img className="mask2" alt="img" src={Mask2} />
                    {isSecondSec && !isThirdSec && !isFirstSec && <img data-aos="fade-up"
                        data-aos-duration="1000" className={isSecondSec ? "girl-sitting-img" : "girl-sitting-absolute"} alt="img" src={GirlSittingImg} />}
                    <img data-aos-duration="2000" data-aos="fade-up" id="bookshelf-img"
                        className="bookshelf-img" alt="img" src={BookshelfImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="phone-img" alt="img" src={PhoneImg} />
                    {secondSectionText()}
                </div>
            </NotMobile>
            <Mobile>
                <div id="second-section-container" className="second-section-container">
                    <img alt="img" className="mask2-mob" src={Mask2Mob} />
                    {isSecondSec && !isThirdSec && !isFirstSec && <img data-aos="fade-up"
                        data-aos-duration="1000"
                        className={isSecondSec ? "girl-sitting-img-mob" :
                            "girl-sitting-absolute"} alt="img" src={GirlSittingImg} />}
                    <img data-aos-duration="2000" data-aos="fade-up" id="bookshelf-img"
                        className="bookshelf-img-mob" alt="img" src={BookshelfImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="phone-img-mob" alt="img" src={PhoneImg} />
                    {secondSectionTextMob()}
                </div>
            </Mobile>
        </>
    );
}

export default SecondSection;