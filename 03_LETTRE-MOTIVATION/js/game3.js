var Game3 = function() {

    console.log("Hello I'm Game 3");

    // si qcm_container -> playGame
    if (document.getElementsByClassName('qcm_container').length > 0) {
        playGame();
    }

    //  si bt_final -> listener pour redirection
    if (document.getElementById("bt_final")) {
        config_redirect();
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
        // listeners sur les bt
        var bt_qcm = document.getElementById('bt_qcm');
        var bt_reponse = document.getElementById('bt_reponse');
        // fx d'apparition sur les container
        var bt_qcm_container = document.getElementById('bt_qcm_container');
        var bt_reponse_container = document.getElementById('bt_reponse_container');
        var is_reponse_screen = false;

        // gestion des case à cocher ... choix multiple ou pas
        for (var i = 0; i < li_list.length; i++) {
            li_list[i].addEventListener('click', function(e) {
                // si on est pas en présence des réponses
                if (!is_reponse_screen) {
                    // si on est pas en présence d'un choix multiple,
                    if (!ul_item.classList.contains('qcm_multiple')) {
                        // on desactive la li active
                        var isActiveLi = ul_item.querySelector('.active');
                        if (isActiveLi) {
                            isActiveLi.classList.remove('active');
                        }
                        // on active la li cochée
                        e.currentTarget.classList.add('active');
                    } else {
                        if (e.currentTarget.classList.contains('active')) {
                            // on active la li cochée
                            e.currentTarget.classList.remove('active');
                        } else {
                            // ou on désactive la li cochée
                            e.currentTarget.classList.add('active');
                        }
                    }
                    // on affiche le bouton valider une fois la question cochée
                    if (!bt_reponse_container.classList.contains('active')) {
                        bt_reponse_container.classList.add('active');
                    }
                }

            });
        }

        // gestion de la réponse sur bt_reponse
        bt_reponse.addEventListener('click',
            function(e) {

                e.preventDefault();

                is_reponse_screen = true;
                // affichage des réponses
                document.getElementById("reponses").style.display = "block";
                // affichage des boutons
                bt_reponse_container.classList.remove('active');
                bt_qcm_container.classList.add('active');

                // activation du bouton 

                var ul_item = document.getElementsByClassName('qcm_container')[0];
                var li_list = ul_item.getElementsByTagName('li');
                // gestion des case à cocher ... choix multiple ou pas

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
                        score--;
                    }
                }
                if (score < 0) {
                    score = 0;
                }
                console.log('localStorage score :(' + qcm_id + ") " + score + "/" + nbTrue);
                // stockage du score en localStorage
                switch (qcm_id) {
                    case 'q1':
                        localStorage.setItem("game3_q1_score", score);
                        break;
                    case 'q2':
                        localStorage.setItem("game3_q2_score", score);
                        break;
                    case 'q3':
                        localStorage.setItem("game3_q3_score", score);
                        break;
                    case 'q4':
                        localStorage.setItem("game3_q4_score", score);
                        break;
                }
            }, false);
    }

    // redirection en fonction du score si bt fin du jeu
    function config_redirect() {

        document.getElementById("bt_final").addEventListener('click', function(e) {

            e.preventDefault();

            var final_score = 0;
            final_score += Number(localStorage.getItem('game3_q1_score'));
            final_score += Number(localStorage.getItem('game3_q2_score'));
            final_score += Number(localStorage.getItem('game3_q3_score'));
            final_score += Number(localStorage.getItem('game3_q4_score'));

            console.log('final_score : ' + final_score);
            if (final_score == 7) {
                location.href = ("3r1_Trouver_la_bonne_formule.php");
            } else if (final_score === 0) {
                location.href = ("3r3_Trouver_la_bonne_formule.php");
            } else {
                location.href = ("3r2_Trouver_la_bonne_formule.php");
            }

        }, false);
    }

    // affichage du score final
    function showFinalScore() {

        var final_score = 0;
        final_score += Number(localStorage.getItem('game3_q1_score'));
        final_score += Number(localStorage.getItem('game3_q2_score'));
        final_score += Number(localStorage.getItem('game3_q3_score'));
        final_score += Number(localStorage.getItem('game3_q4_score'));

        document.getElementById("showFinalScore").innerHTML = final_score + "/7";

        var nbTrue = 7;
        var showScore = 0;
        var gameResult = Math.ceil(final_score / nbTrue * 100);

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