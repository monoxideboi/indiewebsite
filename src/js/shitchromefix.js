console.log("fix loaded");
function ifChrome() {
    if (!!window.chrome) {
        console.log("chrome!");
        document.documentElement.style.cssText = "--def-font-weight: 500";
    }
}