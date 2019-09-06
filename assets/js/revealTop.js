$(document).ready(function () {

    $(window).scroll(function () {
        setTimeout(() => {
            showSmallFeatures();
            showPricingPlans();
        }, 2000);
    });


    function showSmallFeatures() {
        $('.features-small-item').each(function (i, item) {
            const $features = $('#features');
            const featuresHeight = $features.innerHeight();
            let scrollTop = $(window).scrollTop();

            if ((featuresHeight + scrollTop) > scrollTop) {
                $(item).css('transition-delay', `${i * 0.3}s`);
                $(item).addClass('active');
            }
        });
    }

    function showPricingPlans() {
        $('.pricing-item').each(function (i, item) {
            let pricingPlansTop = $('#pricingPlans').offset().top;
            let scrollTop = $(window).scrollTop();

            if (scrollTop > pricingPlansTop) {
                $(item).css('opacity', '1');
                $(item).css('transition-delay', `${i * 0.3}s`);
                $(item).css('transform', 'translateY(15px)');
            }
        });
    }

});