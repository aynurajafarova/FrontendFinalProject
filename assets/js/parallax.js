$(document).ready(function () {

    $(window).scroll(function () {
        parallax();
    });

    function parallax() {
        let scrollTop = $(window).scrollTop();
        $('.parallax-mirror').css('background-position', 'center ' + (scrollTop * 0.75) + 'px');
        // $('.parallax-mirror').css({'top': scrollTop * 0.9});
    };
});