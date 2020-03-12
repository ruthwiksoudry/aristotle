import React, { useEffect, useState } from 'react';
import "./SecondSection.css";
import BookshelfImg from "./assets/sec-3-lib.png"
import LightBlueMaskImg from "./assets/sec-3-mask.png"
import GirlSittingImg from "./assets/sec-3-girl.png";
import PhoneImg from "./assets/sec-4-phone.png";
// import CardTwo from "./assets/Section_4-Card2.png";
// import PlantImg from "./assets/Section_4-Plant.png";
import { _openPlayStore } from './RouteFunction';


function SecondSection(props) {
    const [isImgVisible, setIsImgVisible] = useState(true);


    useEffect(() => {
        let target;
        target = document.getElementById("text-div");
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsImgVisible(true)
                } else {
                    // setIsPositionfixed(true)
                    console.log(entries, "========")
                    // setLogoIsVisble(false)
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(target);
    }, []);


    const renderFirsthalf = () => {
        return (
            <div className="two-top-half">
                <div className="two-top-left-part">
                    <img data-aos-duration="2000" data-aos="fade-up" className="bookshelf-img" alt="img" src={BookshelfImg} />
                </div>
                <div data-aos-duration="2000" data-aos="fade-up" className="two-top-right-part">
                    <div data-aos-duration="2000" className="two-text-wrapper">
                        <div className="revision">Revisions</div>
                        <div className="two-top-heading">
                            Confused about where to begin to revise for your exams?
                    </div>
                        <div id="text-div" className="two-top-body">
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
                    <img data-aos-duration="2000" data-aos="fade-up" className="phone-img" alt="img" src={PhoneImg} />
                </div>
                <div data-aos="fade-up" className="two-bottom-right-part">
                    <div data-aos-duration="2000" data-aos="fade-up" className="two-text-wrapper">
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
            <img className="light-blue-mask-img" alt="img" src={LightBlueMaskImg} />
            {isImgVisible && <img data-aos="fade-up" className="girl-sitting-img" alt="img" src={GirlSittingImg} />}
            {renderFirsthalf()}
            {renderBottomhalf()}
        </div >
    );
}

export default SecondSection;