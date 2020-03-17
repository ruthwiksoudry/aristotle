import React from 'react';
import "./MenuBar.css";
import { _openPlayStore } from './RouteFunction';
import AristotleLogo from "./assets/aristotle_logo.png";

function MenuBar(props) {
    return (
        <div className="menubar-container">
            <div className="container">
                <div className=" menubar-sub-wrapper row">
                    <img className="aristotle-logo" alt="img" src={AristotleLogo} />
                    <div className="menubar-right">
                        <div className="download-app-wrapper">
                            <div onClick={_openPlayStore} className="get-the-app">DOWNLOAD APP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar