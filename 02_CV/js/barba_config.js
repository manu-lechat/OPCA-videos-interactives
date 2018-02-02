var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));

    },

    fadeOut: function() {},

    fadeIn: function() {

        var _this = this;
        var $el = $(this.newContainer);

        $el.css({
            visibility: 'visible',
            opacity: 0
        });

        $el.animate({
            opacity: 1
        }, 400, function() {
            console.log("done");
            $(this.oldContainer).hide();
            _this.done();
        });
    }

});

$(document).ready(function() {

    Barba.Pjax.init();
    Barba.Prefetch.init();

    Barba.Pjax.getTransition = function() {
        return FadeTransition;
    };

    Barba.Dispatcher.on('transitionCompleted', function() {

        newPageReady(); // call main.js function for each new page.
    });
});