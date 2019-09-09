//An image, which is located in a section "Design and Development"

$(document).ready(function () {

    $(window).scroll(function () { //Adding scroll event
        let scrollTop = $(this).scrollTop(); //Getting  the vertical scrollbar position
        const viewBottom = scrollTop + $(window).height(); //Getting lower border of the screen

        let itemsListImgTop = $('.items-list-img-left').offset().top; //Getting the offset top coordinate's of the selected item
        let itemsListImgHeight = itemsListImgTop + $('.items-list-img-left').innerHeight(); //I want the element to appear when we scrolling up to their top

        if (scrollTop < itemsListImgTop && viewBottom > itemsListImgHeight) { //Find element in the viewport
            $('.items-list-img-left img').addClass('reveal-right'); //if it's true, add a class named 'reveal-right' to the selected element
        }
    });

});