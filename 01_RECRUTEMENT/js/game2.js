var Game2 = function() {

    console.log("Hello I'm Game 2");
    var game2 = document.getElementById("game2b");
    var game2_score = 0;
    var game2_result = 0;

    var slides_container = document.getElementsByClassName("slides_container")[0];
    var currentSlide = 1;
    var newSlide = "";
    var newVideoSrc = "";
    var oo_video = "";

    // boutons
    var bt_continuer_game2 = document.getElementById("bt_continuer_game2");
    bt_continuer_game2.addEventListener('click', showNextSlide, false);

    var bt_valider_game2 = document.getElementById("bt_valider_game2");
    bt_valider_game2.addEventListener('click', calculResult, false);

    // activation des puces du <ul>
    configUl('qcm1');
    configUl('qcm2');
    configUl('qcm3');
    configUl('qcm4');
    configUl('qcm5');

    function configUl(ulClass) {

        var ul_item = game2.getElementsByClassName(ulClass)[0];
        var li_list = ul_item.getElementsByTagName('li');

        for (var i = 0; i < li_list.length; i++) {

            li_list[i].addEventListener('click', function(e) {

                // activation de la case cochée
                var isActiveLi = ul_item.querySelector('.active');
                if (isActiveLi) {
                    isActiveLi.classList.remove('active');
                }
                e.currentTarget.classList.add('active');

                console.log(currentSlide);
                if (currentSlide != 5) {
                    // on affiche le bouton continuer si nécéssaire
                    if (!bt_continuer_game2.classList.contains('actif')) {
                        bt_continuer_game2.classList.add('actif');
                    }
                } else {
                    // sur la dernière slide c'est le bouton valider qu'on affiche
                    if (!bt_valider_game2.classList.contains('actif')) {
                        bt_valider_game2.classList.add('actif');
                    }
                }

            });
        }
    }

    // gestion slide by slide
    function showNextSlide() {

        /* compteur de la slide active */
        currentSlide++;

        /* gestion du bouton suite */
        bt_continuer_game2.classList.remove('actif');
        bt_valider_game2.classList.remove('actif');

        /* petit son de transition */
        setTimeout(function() {
            playJingleGame();
        }, 500);

        // afficher la nouvelle slide
        newSlide = "game2b" + currentSlide + "_visible";
        slides_container.className = newSlide;

        // change la classe slide_active
        slides_container.getElementsByClassName('slide_active')[0].classList.remove("slide_active");
        var currentSlideItem = slides_container.getElementsByClassName('slide')[currentSlide - 1];
        currentSlideItem.classList.add("slide_active");

        // changement de la video
        var myVideo = document.getElementsByTagName('video')[0];
        myVideo.className = 'fadeOut';
        setTimeout(function() {

            newVideoSrc = 'videos/game2b_bg' + currentSlide + '.mp4'
            myVideo.setAttribute("src", newVideoSrc);
            myVideo.className = 'fadeIn';
            oo_video = new VideoPlayer();
        }, 300);

    }

    function playJingleGame() {

        console.log("playJingleGame");
        var mySound = document.getElementById('sound_player');
        mySound.autoplay = false;
        mySound.loop = false;
        mySound.volume = 0.5;
        mySound.src = "../00_GLOBAL/sounds/03_TransitionSonore-EcranJeux.mp3";
        mySound.play();

    }

    function calculResult() {

        var nb_a = 0;
        var nb_b = 0;
        var nb_c = 0;
        var winner = "a";
        // on va chercher les li actifs et mémoriser leur type : a,b ou c
        var li_list_active = game2.querySelectorAll('li.active');
        for (var i = 0; i < li_list_active.length; i++) {
            switch (li_list_active[i].getAttribute("qcm-value")) {
                case 'a':
                    nb_a++;
                    break;
                case 'b':
                    nb_b++;
                    break;
                case 'c':
                    nb_c++;
                    break;
            }
        }
        console.log("nb_a : " + nb_a + ", nb_b : " + nb_b + " nb_c : " + nb_c);

        var best_value = Math.max(nb_a, nb_b, nb_c);
        if (nb_a == best_value) {
            winner = "a"
        }
        if (nb_b == best_value) {
            winner = "b"
        }
        if (nb_c == best_value) {
            winner = "c"
        }

        console.log("winner is " + winner);
        Barba.Pjax.goTo("2c" + winner + "_Test_du_recruteur.php");

    }

};
