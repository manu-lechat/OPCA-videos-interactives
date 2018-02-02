var Game3 = function() {

    console.log("Hello I'm Game 3");

    // si qcm_container -> playGame
    if (document.getElementsByClassName('qcm_container').length > 0) {
        playGame();
    }

    //  si showScore  -> score intermédiaire
    if (document.getElementById("showScore")) {
        showScore();
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
        var bt_qcm = document.getElementById('bt_qcm');

        // gestion des case à cocher ... choix multiple ou pas
        for (var i = 0; i < li_list.length; i++) {
            li_list[i].addEventListener('click', function(e) {
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
                if (!bt_qcm.classList.contains('active')) {
                    bt_qcm.classList.add('active');
                }
            });
        }

        // gestion du score sur bt_qcm 
        bt_qcm.addEventListener('click',
            function(e) {

                e.preventDefault();
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

                // stockage du score en localStorage
                switch (qcm_id) {
                    case 'q1':
                        localStorage.setItem("game3_q1_score", score);
                        localStorage.setItem("game3_q1_txt", "votre score : " + score + "/" + nbTrue);
                        break;
                    case 'q2':
                        localStorage.setItem("game3_q2_score", score);
                        localStorage.setItem("game3_q2_txt", "votre score : " + score + "/" + nbTrue);
                        break;
                    case 'q3':
                        localStorage.setItem("game3_q3_score", score);
                        localStorage.setItem("game3_q3_txt", "votre score : " + score + "/" + nbTrue);
                        break;
                    case 'q4':
                        localStorage.setItem("game3_q4_score", score);
                        localStorage.setItem("game3_q4_txt", "votre score : " + score + "/" + nbTrue);
                        break;
                    case 'q5':
                        localStorage.setItem("game3_q5_score", score);
                        localStorage.setItem("game3_q5_txt", "votre score : " + score + "/" + nbTrue);
                        break;
                }
            }, false);
    }

    // ou affichage du score ( qcm_id indique lequel )
    function showScore() {

        // récup du localStorage
        var qcm_id = document.getElementById("showScore").getAttribute('qcm_id');
        var showScore = "";
        switch (qcm_id) {
            case 'q1':
                showScore = localStorage.getItem('game3_q1_txt');
                console.log('showScore = ' + showScore);
                break;
            case 'q2':
                showScore = localStorage.getItem('game3_q2_txt');
                break;
            case 'q3':
                showScore = localStorage.getItem('game3_q3_txt');
                break;
            case 'q4':
                showScore = localStorage.getItem('game3_q4_txt');
                break;
            case 'q5':
                showScore = localStorage.getItem('game3_q5_txt');
                break;
        }
        // insert in dom
        document.getElementById("showScore").innerHTML = showScore;
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
            final_score += Number(localStorage.getItem('game3_q5_score'));

            console.log('final_score : ' + final_score);

            if (final_score == 7) {
                location.href = ("3j1_Les_erreurs_du_CV.php");
            } else if (final_score === 0) {
                location.href = ("3j3_Les_erreurs_du_CV.php");
            } else {
                location.href = ("3j2_Les_erreurs_du_CV.php");
            }

        }, false);
    }

    // affichage du score final
    function showFinalScore() {

        var final_score = 0;
        final_score += Math.round(localStorage.getItem('game3_q1_score'));
        final_score += Math.round(localStorage.getItem('game3_q2_score'));
        final_score += Math.round(localStorage.getItem('game3_q3_score'));
        final_score += Math.round(localStorage.getItem('game3_q4_score'));
        final_score += Math.round(localStorage.getItem('game3_q5_score'));
        document.getElementById("showFinalScore").innerHTML = final_score + "/7";
    }

};