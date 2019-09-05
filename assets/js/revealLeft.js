$(document).ready(function () {
    
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let servicesTop = $('#services').offset().top;
        if (scrollTop > servicesTop) {
            $('.items-list-img-right img').addClass('reveal-left');
        }
    });

});

