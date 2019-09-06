$(document).ready(function () {
    $('.menu-trigger-icon').click(function (e) {
        e.preventDefault();
        $('.menu-trigger-icon').toggleClass('open');

        if ($('.menu-trigger-icon').hasClass('open')) {
            $('.menu-bar').show();
        } else {
            $('.menu-bar').hide();
        }
    });


$('.submenu').each(function(i,submenu){
    $(submenu).click(function(){
        $(submenu).find($('.submenu-list')).toggleClass('active');
    });
})

    // let submenu = document.querySelectorAll('.submenu');
    // submenu.forEach(sub => {
    //     sub.addEventListener('click', () => {
    //         let submenuList = sub.querySelector('.submenu-list');
           
    //             submenuList.classList.toggle('active');
    //     });
    // })
})