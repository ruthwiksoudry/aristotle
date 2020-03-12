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