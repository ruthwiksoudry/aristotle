import React from 'react';
import "./Footer.css";
import FooterImg from "./assets/Footer.png";
import PlayStoreImg from "./assets/play-store.png"
import { _openPlayStore, NotMobile, Mobile } from './HelperFunctions';


function Footer(props) {

    return (
        <>
            <NotMobile>
                <div id="footer-container" className="footer-container">
                    <div className="footer-title-wrapper">
                        <div className="footer-title">
                            Achive master and become the hero of you own story.
            </div>
                    </div>
                    <img className="footer-img" alt="img" src={FooterImg} />
                    <div className="download-app">Download the app</div>
                    <img className="play-store-img" onClick={_openPlayStore}
                        alt="img" src={PlayStoreImg} />
                </div>
            </NotMobile>
            <Mobile>
                <div id="footer-container" className="footer-container">
                    <div className="footer-title-wrapper-mob">
                        <div className="footer-title-mob">
                            Achive master and become the hero of you own story.
                        </div>
                    </div>
                    <img className="footer-img-mob" alt="img" src={FooterImg} />
                    <div className="download-app-mob">Download the app</div>
                    <img className="play-store-img-mob" onClick={_openPlayStore}
                        alt="img" src={PlayStoreImg} />
                </div>
            </Mobile>
        </>
    );
}

export default Footer;