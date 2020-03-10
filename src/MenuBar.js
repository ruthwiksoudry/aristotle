import React from 'react';
import "./MenuBar.css";
import { _openPlayStore } from './RouteFunction';

function MenuBar(props) {
    return (
        <div className="menubar-container">
            <h3 className="menubar-left">ARISTOTLE</h3>
            <div className="menubar-right">
                <div onClick={_openPlayStore} className="get-the-app">GET THE APP</div>
            </div>
        </div>
    );
}

export default MenuBar