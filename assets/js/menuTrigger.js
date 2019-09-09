$(document).ready(function () {
    $('.menu-trigger-icon').click(function (e) { //Adding click event to the selected element
        e.preventDefault(); // Preventing Default
        $('.menu-trigger-icon').toggleClass('open');  //Adding and removing the "open" class name from the selected element

        if ($('.menu-trigger-icon').hasClass('open')) {  //If the selected element has the class name “open”
            $('.menu-bar').show(); //In this case, show the selected element
        } else {
            $('.menu-bar').hide(); //Otherwise, hide the selected element
        }
    });


    $('.submenu').each(function (i, submenu) { //Return every element that contains the class named "submenu"
        $(submenu).click(function () { //Adding click event 
            $(submenu).find($('.submenu-list')).toggleClass('active'); //Toggle between adding and removing the class name 'active'
        });
    })

})