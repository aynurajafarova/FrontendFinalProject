$(document).ready(function () {

    $(window).scroll(function () {
        setTimeout(() => {
            showSmallFeatures();
        }, 2000);
    });


    function showSmallFeatures() {
        $('.features-small-item').each(function (i, item) {
            const $features = $('#features');
            const featuresHeight = $features.innerHeight();
            const scrollTop = $(window).scrollTop();

            if ((featuresHeight + scrollTop) > scrollTop) {
                $(item).css('transition-delay', `${i * 0.3}s`);
                $(item).addClass('active');
            }
        })
        // const items = document.querySelectorAll('.features-small-item');
        // items.forEach((element, index) => {
        //     const $features = $('#features');
        //     let featuresHeight = $features.innerHeight();
        //     const scrollTop = $(window).scrollTop();

        //     if ((featuresHeight + scrollTop) > scrollTop) {
        //         element.style.transitionDelay = `${index * 0.3}s`;
        //         element.classList.add('active');
        //     }
        // });
    }

});