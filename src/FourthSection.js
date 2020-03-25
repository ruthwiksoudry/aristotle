import React, { useEffect, useState } from 'react';
import "./FourthSection.css";
import Mask4 from "./assets/mask4.png";
import RunningImg from "./assets/sec-7-boy.png";
import SectionEightImg from "./assets/sec-8-img.png"
import PyramidImg from "./assets/sec-8-asset.png";
import { _openPlayStore, NotMobile, Mobile } from './HelperFunctions';
import Mask4Mob from "./assets/mob-mask4.png";


function FourthSection(props) {
    const [isOneImg, setOneImg] = useState(false);
    const { isFourthSec, isThirdSec, isFifthSec } = props;

    useEffect(() => {
        let targetOne;
        targetOne = document.getElementById("running-img");
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

    const fourthSectionContainer = () => {
        if (isFourthSec && !isThirdSec && !isFifthSec) {
            return isOneImg ? (
                <div data-aos-duration="2000" className="fourth-text-section">
                    <div className="challenges">CHALLENGES</div>
                    <div className="fourth-heading">
                        Running against clock, playing catch up with your friends?
                        </div>
                    <div className="fourth-content">
                        Worried that your results will leave you behind?
                    </div>
                </div>
            ) : (
                    <div className="fourth-text-section">
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

    const fourthSectionContainerMob = () => {
        if (isFourthSec && !isThirdSec && !isFifthSec) {
            return isOneImg ? (
                <div data-aos="fade-up" className="fourth-text-section-mob">
                    <div className="challenges-mob">CHALLENGES</div>
                    <div className="fourth-heading-mob">
                        Running against clock, playing catch up with your friends?
                        </div>
                    <div className="fourth-content">
                        Worried that your results will leave you behind?
                    </div>
                </div>
            ) : (
                    <div className="fourth-text-section-mob">
                        <div className="challenges-mob">CHALLENGES</div>
                        <div className="fourth-heading-mob">
                            Here's is the nitro boost you need to catch up with your friends!
                    </div>
                        <div className="fourth-content">
                            Challenge them in a quiz and give them a friendly competition
                    </div>
                        <div onClick={_openPlayStore} className="fourth-get-app-button-mob">GET THE APP</div>
                    </div>
                )
        }
    }

    return (
        <>
            <NotMobile>
                <div id="fourth-section-container" className="fourth-section-container">
                    <img className="mask4" alt="img" src={Mask4} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="running-img"
                        className="running-img" alt="img" src={RunningImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="sec-8-img" alt="img" src={SectionEightImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="pyramid-img" alt="img" src={PyramidImg} />
                    {fourthSectionContainer()}
                </div>
            </NotMobile>
            <Mobile>
                <div id="fourth-section-container" className="fourth-section-container">
                    <img className="mask4-mob" alt="img" src={Mask4Mob} />
                    <img data-aos-duration="2000" data-aos="fade-up" id="running-img"
                        className="running-img-mob" alt="img" src={RunningImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="sec-8-img-mob" alt="img" src={SectionEightImg} />
                    <img data-aos-duration="2000" data-aos="fade-up"
                        className="pyramid-img-mob" alt="img" src={PyramidImg} />
                    {fourthSectionContainerMob()}
                </div>
            </Mobile>
        </>
    );
}

export default FourthSection;