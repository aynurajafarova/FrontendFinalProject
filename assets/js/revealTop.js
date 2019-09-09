$(document).ready(function () {

    $(window).scroll(function () { //Adding scroll event
        setTimeout(() => { //Calling functions after 2000 milliseconds
            showSmallFeatures(); //Calling a function named showSmallFeatures
            showPricingPlans();  //Calling a function named showPricingPlans
        }, 1500);
    });


    function showSmallFeatures() { //This function displays items on a screen that has a class named 'features-small-item'
        $('.features-small-item').each(function (i, item) { //Return every element that contains the class named "features-small-item"
            const $features = $('#features');
            const featuresHeight = $features.innerHeight(); //Getting the $features's height
            let scrollTop = $(window).scrollTop(); //Getting  the vertical scrollbar position

            if ((featuresHeight + scrollTop) > scrollTop) { //Comparing scrollTop with the sum of featuresHeight and scrollTop
                $(item).css('transition-delay', `${i * 0.3}s`);  // Adding a transition-delay property to the selected elements depending on their indexes
                $(item).addClass('active'); //Add a class named 'active' to the selected element
            }
        });
    }

    function showPricingPlans() { //This function displays items on a screen that has a class named 'pricing-item'
        $('.pricing-item').each(function (i, item) {  //Return every element that contains the class named "pricing-item"
            let pricingPlansTop = $('#pricingPlans').offset().top; //Getting the offset coordinate's of the selected item
            let scrollTop = $(window).scrollTop();  //Getting  the vertical scrollbar position

            if (scrollTop > pricingPlansTop) {  //Comparing scrollTop with the sum of featuresHeight and scrollTop
                $(item).css('opacity', '1');  //Adding opacity property to the selected elements
                $(item).css('transition-delay', `${i * 0.3}s`);  //Adding a transition-delay property to the selected elements depending on their indexes
                $(item).css('transform', 'translateY(15px)');  //Adding transform property to the selected elements
            }
        });
    }

});