var swipeTransition = Barba.BaseTransition.extend({
    start: function() {

        this.newContainerLoading.then(this.movePages.bind(this));

        //    this.originalThumb = lastElementClicked;

    },

    movePages: function() {

        _this = this;

        // debut de transition

        // $(this.oldContainer)
        // $(this.newsContainer)

        $('.transitionner').addClass('start');

        setTimeout(function() {

            $(this.newsContainer).css({
                visibility: 'visible',
                opacity: 1
            });

            $(this.oldContainer).css({
                opacity: 0
            });

            $('.transitionner').removeClass('start').addClass('end');

            setTimeout(function() {

                $('.transitionner').removeClass('end');
                _this.done();

            }, 1800);

        }, 1300);

    }

});