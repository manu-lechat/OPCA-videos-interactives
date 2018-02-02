var Game1bis = function() {

    console.log("Hello I'm Game 1 bis");
    var game1bis = document.getElementById("game1bbis");
    var game1_score = 0;
    var game1_result = 0;

    // boutons prevNext
    var bt_prevNext = document.getElementsByClassName('bt_prevNext');
    for (var i = 0; i < bt_prevNext.length; i++) {

        bt_prevNext[i].addEventListener("click", function(event) {
            event.preventDefault();
            // on vire la classe du container 3 slides
            game1bis.classList.remove('slide1visible');
            game1bis.classList.remove('slide2visible');
            game1bis.classList.remove('slide3visible');
            // on le remplace par celui du nextPrev
            var slideToShow = event.currentTarget.getAttribute('target');
            game1bis.classList.add(slideToShow);

        });
    }

};