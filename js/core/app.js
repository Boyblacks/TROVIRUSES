/* TROVIRUSES
   Application Entry Point
*/

(function () {
    "use strict";

    function init() {

        if (
            window.TROVIRUSES &&
            window.TROVIRUSES.router
        ) {
            window.TROVIRUSES.router.init();
        }

        console.log(
            "TROVIRUSES application initialized."
        );
    }

    if (
        document.readyState === "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            init
        );
    } else {
        init();
    }

})();
