$(document).ready(function () {
    $(window).on('load', function () {
        $('#preloader').css('opacity', '0');
        $('#preloader').css('pointer-events', 'none');
        $('#preloader').fadeOut('slow');
    });

});