$(document).ready(function() {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile);
    if (isMobile) {
        $('.div-center').css("max-width", "100%");
    }
});