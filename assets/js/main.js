//Keep the navigation bar at the top of the page while scrolling

$(document).ready(function () {

    $(window).scroll(function () {  //Adding scroll event to the document
        const $header = $('#header-area');
        const headerHeight = $header.innerHeight();  //Taking the header's height
        const scrollTop = $(this).scrollTop(); //Getting  the vertical scrollbar position

        if (scrollTop >= headerHeight) { //Comparing scrollTop with the headerHeight,if scrollTop is bigger than headerHeight
            $header.addClass('scrolled'); //Add class
        } else {
            $header.removeClass('scrolled'); //Otherwise,remove class
        }
    });

});

