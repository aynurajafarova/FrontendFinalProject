$(document).ready(function () {

    $(window).scroll(function () {  //Adding scroll event
        parallax();  //Calling a function named parallax
    });

    function parallax() { //This function changes the position of the background image depending on scrollTop 
        let scrollTop = $(window).scrollTop();  //Getting  the vertical scrollbar position
        $('.parallax-mirror').css('background-position', 'center ' + (scrollTop * 0.75) + 'px');
        // $('.parallax-mirror').css({'top': scrollTop * 0.9});
    };
});