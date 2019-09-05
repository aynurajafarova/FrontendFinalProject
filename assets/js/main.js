$(document).ready(function () {

    $(window).scroll(function () {
        const $header = $('#header-area');
        const headerHeight = $header.innerHeight();
        const scrollTop = $(this).scrollTop();

        if (scrollTop >= headerHeight) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }

        // if(scrollTop){
        //     $header.addClass('scrolled');
        // }else{
        //     $header.removeClass('scrolled');
        // }

    });

});

