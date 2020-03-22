import React from "react";
import Responsive from "react-responsive";

export const _openPlayStore = () => {
    window.open(
        "https://play.google.com/store/apps/details?id=ai.digitalaristotle.assessed.student&hl=en"
    );
};

export const isInterSectionObserverSupported = () => {
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
        return true;
    } else {
        return false;
    }
};

export const NotMobile = props => (
    <Responsive {...props} minWidth={768} />
);

export const Mobile = props => (
    <Responsive {...props} maxWidth={767} />
);