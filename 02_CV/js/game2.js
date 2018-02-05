var Game2 = function() {

    console.log("Hello I'm Game 2");

    // si qcm_container -> playGame
    if (document.getElementsByClassName('qcm_container').length > 0) {
        playGame();

        if (document.getElementsByClassName('bt_bc_container')[0]) {

            var bt_qcm = document.getElementsByClassName('bt_bc_container')[0];
            bt_qcm.addEventListener('click', function(e) {
                e.preventDefault();
                getScore();
            }, false);
        }

    }
    // si showFinalScore -> showFinalScore
    if (document.getElementById("showFinalScore")) {
        showFinalScore();
    }

    //  si bt_final -> listener pour redirection
    if (document.getElementById("bt_final")) {
        document.getElementById("bt_final").addEventListener('click', function(e) {
            e.preventDefault();
            getScore();
            config_redirect();
        }, false);
    }

    // si showFinalScore -> showFinalScore
    if (document.getElementById("showFinalScore")) {
        showFinalScore();
    }

    // play Game
    function playGame() {

        var ul_item = document.getElementsByClassName('qcm_container')[0];
        var qcm_id = ul_item.id;
        var li_list = ul_item.getElementsByTagName('li');
        var bt_qcm = document.getElementsByClassName('bt_bc_container')[0];

        // gestion des case à cocher
        for (var i = 0; i < li_list.length; i++) {

            li_list[i].addEventListener('click', function(e) {

                // on active la li cochée
                var isActiveLi = ul_item.querySelector('.active');
                if (isActiveLi) {
                    isActiveLi.classList.remove('active');
                }
                e.currentTarget.classList.add('active');

                // on affiche le bouton valider une fois la question cochée
                if (!bt_qcm.classList.contains('active')) {
                    bt_qcm.classList.add('active');
                }
            });
        }

    }

    function getScore() {

        var ul_item = document.getElementsByClassName('qcm_container')[0];
        var qcm_id = ul_item.id;
        var li_list = ul_item.getElementsByTagName('li');
        var nbTrue = 0;
        var score = 0;

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
                if (score > 0) {
                    score--;
                }
            }
        }

        console.log('score : ' + qcm_id + " : " + score);
        // stockage du score en localStorage
        switch (qcm_id) {
            case 'q1':
                localStorage.setItem("game2_q1_score", score);
                break;
            case 'q2':
                localStorage.setItem("game2_q2_score", score);
                break;
            case 'q3':
                localStorage.setItem("game2_q3_score", score);
                break;
            case 'q4':
                localStorage.setItem("game2_q4_score", score);
                break;
            case 'q5':
                localStorage.setItem("game2_q5_score", score);
                break;
        }
    }

    // redirection en fonction du score si bt fin du jeu
    function config_redirect() {

        var final_score = 0;
        final_score += Number(localStorage.getItem('game2_q1_score'));
        final_score += Number(localStorage.getItem('game2_q2_score'));
        final_score += Number(localStorage.getItem('game2_q3_score'));
        final_score += Number(localStorage.getItem('game2_q4_score'));
        final_score += Number(localStorage.getItem('game2_q5_score'));

        console.log('final_score : ' + final_score);

        if (final_score == 5) {
            Barba.Pjax.goTo("2g1_Les_intitules.php");
        } else if (final_score === 0) {
            Barba.Pjax.goTo("2g3_Les_intitules.php");
        } else {
            Barba.Pjax.goTo("2g2_Les_intitules.php");
        }

    }

    // affichage du score final
    function showFinalScore() {

        var final_score = 0;
        final_score += Number(localStorage.getItem('game2_q1_score'));
        final_score += Number(localStorage.getItem('game2_q2_score'));
        final_score += Number(localStorage.getItem('game2_q3_score'));
        final_score += Number(localStorage.getItem('game2_q4_score'));
        final_score += Number(localStorage.getItem('game2_q5_score'));
        document.getElementById("showFinalScore").innerHTML = final_score + "/5";
    }

};
