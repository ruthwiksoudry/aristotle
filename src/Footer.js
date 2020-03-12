import React from 'react';
import "./Footer.css";
import FooterImg from "./assets/Footer.png";
import PlayStoreImg from "./assets/play-store.png"
import { _openPlayStore } from './RouteFunction';


function Footer(props) {

    return (
        <div id="footer-contanier" className="footer-contanier">
            <div className="footer-title">
                Achive master and become the hero of you own story.
            </div>
            <img className="footer-img" alt="img" src={FooterImg} />
            <div className="download-app">Download the app</div>
            <img className="play-store-img" onClick={_openPlayStore}
                alt="img" src={PlayStoreImg} />
        </div>
    );
}

export default Footer;