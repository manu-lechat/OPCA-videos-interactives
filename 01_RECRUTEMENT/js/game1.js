var Game1 = function() {

    console.log("Hello I'm Game 1");
    var game1 = document.getElementById("game1b");
    var game1_score = 0;
    var game1_result = 0;

    // si qcm_container -> playGame
    if (document.getElementsByClassName('qcm_container').length > 0) {
        playGame();
    }

    // si showFinalScore -> showFinalScore 
    if (document.getElementById("showFinalScore")) {
        showFinalScore();
    }

    // play Game
    function playGame() {

        var ul_item = document.getElementsByClassName('qcm_container');
        var li_list = game1.getElementsByTagName('li');

        // gestion du page à page
        var bt_prevNext = document.getElementsByClassName('bt_prevNext');
        for (var i = 0; i < bt_prevNext.length; i++) {

            bt_prevNext[i].addEventListener("click", function(event) {
                event.preventDefault();
                // on vire la classe du container 3 slides
                game1.classList.remove('slide1visible');
                game1.classList.remove('slide2visible');
                game1.classList.remove('slide3visible');
                // on le remplace par celui du nextPrev
                var slideToShow = event.currentTarget.getAttribute('target');
                game1.classList.add(slideToShow);
            });
        }

        // gestion des case à cocher : boucle sur les li
        for (var i = 0; i < li_list.length; i++) {
            li_list[i].addEventListener('click', function(e) {

                    if (e.currentTarget.classList.contains('active')) {
                        // on active la li cochée
                        e.currentTarget.classList.remove('active');
                    } else {
                        // ou on désactive la li cochée
                        e.currentTarget.classList.add('active');
                    }
                }

            );
        }

        // gestion du validate
        var bt_Validate = game1.getElementsByClassName('bt_valider_annonce')[0];
        bt_Validate.addEventListener('click',
            function(e) {
                e.preventDefault();
                var nbTrue = 0;
                var score = 0;
                nb_li = li_list.length;

                // calcul du score
                for (var i = 0; i < li_list.length; i++) {

                    if (li_list[i].getAttribute('istrue') == 'true') {
                        nbTrue++;
                    }
                    // si c'est une réponse vraie et que c'est coché :
                    if (li_list[i].getAttribute('istrue') == 'true' && li_list[i].classList.contains('active')) {
                        score++;
                    }
                    // si c'est une réponse fausse et que c'est coché : 
                    else if (li_list[i].getAttribute('istrue') == 'false' && li_list[i].classList.contains('active')) {
                        score--;
                    }
                }
                if (score < 0) {
                    score = 0;
                }

                score_pct = Math.ceil(score / nbTrue * 100);

                console.log('result : ' + score + " / " + nbTrue + "(" + score_pct + "%)");

                // stockage du score en localStorage
                localStorage.setItem("game1_result", score_pct);

                // redirection
                if (score_pct == 100) {
                    location.href = ("1cc_Rediger_l_annonce.php");
                } else if (score_pct === 0) {
                    location.href = ("1ca_Rediger_l_annonce.php");
                } else {
                    location.href = ("1cb_Rediger_l_annonce.php");
                }

            }, false);
    }

    function showFinalScore() {

        var showScore = 0;
        var gameResult = localStorage.getItem("game1_result");
        // loop until showScore == game1_result
        var myInterval = setInterval(function() {
            showScore++;
            if (showScore < gameResult) {
                document.getElementById("showFinalScore").innerHTML = showScore + "%";
            } else {
                clearInterval(myInterval);
                document.getElementById("showFinalScore").innerHTML = gameResult + "%";
            }
        }, 30);
    }

};