$(document).ready(function () {
    
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let developmentTop = $('#designDevelopment').offset().top;
        if (scrollTop > developmentTop) {
            $('.items-list-img-left img').addClass('reveal-right');
        }
    });

});