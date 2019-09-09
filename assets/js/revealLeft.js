//An image, which is located in a section "Cloud Services"

$(document).ready(function () {

    $(window).scroll(function () {  //Adding scroll event

        let scrollTop = $(this).scrollTop(); //Getting  the vertical scrollbar position
        const viewBottom = scrollTop + $(window).height(); //Getting lower border of the screen

        let itemsListImgTop = $('.items-list-img-right').offset().top; //Getting the offset top coordinate's of the selected item
        let itemsListImgHeight = itemsListImgTop + $('.items-list-img-right').innerHeight(); //I want the element to appear when we scrolling up to their top

        if (scrollTop < itemsListImgTop && viewBottom > itemsListImgHeight) { //Find element in the viewport
            $('.items-list-img-right img').addClass('reveal-left'); //if it's true, add a class named 'reveal-left' to the selected element
        }
    });

});