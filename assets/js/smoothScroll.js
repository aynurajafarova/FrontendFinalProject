$(document).ready(function () {

    $('.submenu a').on('click', function (e) {  // Adding click event
        if (this.hash !== '') { // if hash is not equal to an empty string
            e.preventDefault();  // Prevent default behavior

            const hash = this.hash;  // Putting a hash value into a variable
            $('html,body').animate({  // Target the body and call the animate method and inside animate it's going to take an object
                scrollTop: $(hash).offset().top  // taking the hash value and calling offset method and it will scroll down from the top
            }, 800);  // speed that we want to scroll, milliseconds
        };
    })

});
