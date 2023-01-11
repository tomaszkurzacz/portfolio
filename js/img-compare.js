$(function () {
    var imagesCompareElement = $('.js-img-compare').imagesCompare();
    var imagesCompare = imagesCompareElement.data('imagesCompare');
    var events = imagesCompare.events();

    imagesCompare.on(events.changed, function (event) {
        console.log(events.changed);
        console.log(event.ratio);
        if (event.ratio < 0.4) {
            console.log('We see more than half of the back image');
        }
        if (event.ratio > 0.6) {
            console.log('We see more than half of the front image');
        }

        if (event.ratio <= 0) {
            console.log('We see completely back image');
        }

        if (event.ratio >= 1) {
            console.log('We see completely front image');
        }
    });

    $('.js-front-btn').on('click', function (event) {
        event.preventDefault();
        imagesCompare.setValue(1, true);
    });

    $('.js-back-btn').on('click', function (event) {
        event.preventDefault();
        imagesCompare.setValue(0, true);
    });

    $('.js-toggle-btn').on('click', function (event) {
        event.preventDefault();
        if (imagesCompare.getValue() >= 0 && imagesCompare.getValue() < 1) {
            imagesCompare.setValue(1, true);
        } else {
            imagesCompare.setValue(0, true);
        }
    });
});