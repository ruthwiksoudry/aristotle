import React, { useState, useEffect } from 'react';
import "./FifthSection.css";
import GirlWithPower from "./assets/sec-9-girl.png";
import SectionTenImg from "./assets/sec-10-img.png";
import SectionTenAsset from "./assets/sec-10-asset.png";
import { _openPlayStore } from './RouteFunction';
import Mask5 from "./assets/mask5.png";


function FifthSection(props) {
    const [isOneImg, setOneImg] = useState(false);
    const { isFifthSec, isFooter, isFourthSec } = props;

    useEffect(() => {


        let targetOne;
        targetOne = document.getElementById("section-nine-img");
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

    const fifthTextSection = () => {
        console.log(isFooter, "isfooter")

        if (isFifthSec && !isFourthSec && !isFooter) {
            return isOneImg ? (
                <div data-aos-duration="2000" data-aos="fade-up"
                    className="fifth-text-section">
                    <div className="question-forum">FORUM</div>
                    <div className="third-heading">
                        Nobody around you to answer your doubts and question...
                         </div>
                    <div className="third-content">
                        Feels like walls are closing in on you?
                    </div>
                </div>
            ) : (
                    <div data-aos-duration="2000" data-aos="fade-up"
                        className="fifth-text-section">
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
        <div id="fifth-section-container" className="fifth-section-container">
            <img className="mask5" alt="img" src={Mask5} />
            <img data-aos-duration="2000" data-aos="fade-up"
                id="section-nine-img" className="section-nine-img" alt="img" src={GirlWithPower} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="phone-two-img" alt="img" src={SectionTenImg} />
            <img data-aos-duration="2000" data-aos="fade-up"
                className="sec-10-asset" alt="img" src={SectionTenAsset} />
            {fifthTextSection()}
        </div>
    );
}

export default FifthSection;